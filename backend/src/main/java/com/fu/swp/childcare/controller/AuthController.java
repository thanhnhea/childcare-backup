package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.model.PasswordResetToken;
import com.fu.swp.childcare.payload.RegisterRequest;
import com.fu.swp.childcare.model.ERole;
import com.fu.swp.childcare.model.Role;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.LoginRequest;
import com.fu.swp.childcare.payload.RequestResetPassword;
import com.fu.swp.childcare.payload.response.JwtResponse;
import com.fu.swp.childcare.payload.response.MessageResponse;
import com.fu.swp.childcare.repositories.PasswordResetTokenRepository;
import com.fu.swp.childcare.repositories.RoleRepository;
import com.fu.swp.childcare.repositories.UserRepository;
import com.fu.swp.childcare.security.jwt.JwtUtils;
import com.fu.swp.childcare.security.services.UserDetailsImpl;
import com.fu.swp.childcare.services.MailService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private ServerProperties serverProperties;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordResetTokenRepository resetPasswordRepo;
    @Autowired
    MailService emailService;

    @Autowired
    PasswordEncoder encoder;
    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
       try{
           Authentication authentication = authenticationManager.authenticate(
                   new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

           SecurityContextHolder.getContext().setAuthentication(authentication);
           String jwt = jwtUtils.generateJwtToken(authentication);

           UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
           List<String> roles = userDetails.getAuthorities().stream()
                   .map(GrantedAuthority::getAuthority)
                   .collect(Collectors.toList());

           return ResponseEntity.ok(new JwtResponse(jwt,
                   userDetails.getId(),
                   userDetails.getUsername(),
                   userDetails.getEmail(),
                   roles));
       }catch (Exception e){
           return ResponseEntity.badRequest().body(e.getMessage());
       }
    }


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        try{
            if (userRepository.existsByUsername(registerRequest.getUsername())) {
                return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
            }
            if (userRepository.existsByEmail(registerRequest.getEmail())) {
                return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
            }

            Set<Role> roles = new HashSet<>();
            String requestedRole = registerRequest.getRole();
            Role userRole;
            if (requestedRole == null) {
                userRole = roleRepository.findByName(ERole.ROLE_USER)
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            } else {
                userRole = roleRepository.findByName(ERole.valueOf(registerRequest.getRole()))
                        .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            }
            if (!userRole.getName().equals(ERole.ROLE_USER)) {
                try {
                    emailService.sendHtmlMessage(registerRequest.getEmail(),
                            "create Account successful", "Dear mr " +
                                    registerRequest.getFirstName() + ",\n" +
                                    "your internal account of children_care have been created," +
                                    "\nplease login with username:  " +
                                    registerRequest.getUsername() +
                                    " and password is " +
                                    registerRequest.getPassword());
                } catch (MessagingException e) {
                    e.printStackTrace();
                }
            }
            roles.add(userRole);
            User user = new User(registerRequest.getUsername(),
                    registerRequest.getEmail(),
                    registerRequest.getFirstName(),
                    registerRequest.getLastName(),
                    registerRequest.getPhone(),
                    registerRequest.getAddress(),
                    encoder.encode(registerRequest.getPassword()),
                    roles
            );
            userRepository.save(user);
            System.out.println("saved");
            return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @PostMapping("/forgot_password")
    public ResponseEntity<?> forgotPassword(@Valid @RequestBody String email) {
        List<User> users = userRepository.findUserByEmail(email);
        if (users.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("email is not exist"));
        }
        String generatedToken = "";
        int length = 4;
        String characters = "0123456789";

        for (int i = 0; i < length; i++) {
            int randomIndex = (int) Math.floor(Math.random() * characters.length());
            generatedToken += characters.charAt(randomIndex);
        }
        User user = users.get(0);
        PasswordResetToken token = new PasswordResetToken(generatedToken, user);
        token.setExpiryDate();
        resetPasswordRepo.save(token);
        String url = "http://localhost:8080/api/auth";
        Map<String, Object> model = new HashMap<>();
        model.put("token", generatedToken);
        model.put("user", user);
        model.put("signature", "children-careswp391");

        model.put("resetUrl", url + "/reset-password?token=" + token.getToken());

        try {
            emailService.sendSimpleMail(email, model);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok(new MessageResponse("token generated!"));
    }

    @PostMapping("reset-password")
    public ResponseEntity<?> resetPasswordWithToken(@Valid @RequestBody RequestResetPassword request) {
        PasswordResetToken passToken = resetPasswordRepo.findByToken(request.getToken());
        if (passToken == null) {
            return ResponseEntity.badRequest().body(new MessageResponse("invalid token"));
        }
        if (passToken.isExpired()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Token expired"));
        }
        User user = passToken.getUser();
        if (encoder.matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body((new MessageResponse("Password are matches with previous")));
        }
        user.setPassword(encoder.encode(request.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("password save successfully!"));
    }

}
