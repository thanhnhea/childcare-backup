package com.fu.swp.childcare.controller.user;


import com.fu.swp.childcare.controller.mapping.UserDto;
import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.RequestChangePassword;
import com.fu.swp.childcare.payload.SubmitChildrenInfoRequest;
import com.fu.swp.childcare.payload.response.MessageResponse;
import com.fu.swp.childcare.repositories.UserRepository;
import com.fu.swp.childcare.services.ChildrenService;
import com.fu.swp.childcare.services.UserProfileService;
import com.fu.swp.childcare.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


@RestController
@RequestMapping("/account")
public class UserController {

    @Autowired
    private UserProfileService userService;

    @Autowired
    private ChildrenService childrenService;

    @Autowired
    PasswordEncoder encoder;


    @GetMapping(value = "/users")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getAllUser() {
        try {
            return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("submit_children")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<?> createChildrenProfile(@Valid @RequestBody SubmitChildrenInfoRequest request) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        Date dob;
        try {
            dob = new SimpleDateFormat("dd/MM/yyyy").parse(request.getDob());
        } catch (ParseException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new MessageResponse("Wrong format date"));
        }
        User user = userService.loadUserByUsername(username);
        ChildInformation child = new ChildInformation(
                request.getFirstName(),
                request.getLastName(),
                dob,
                request.isGender(),
                request.getInterest(),
                request.getNeeds(),
                request.getNote(),
                user
        );
        childrenService.save(child);
        return ResponseEntity.ok(new MessageResponse("Success"));
    }

    @GetMapping(value = "/users/{pageIndex}/{pageSize}")
    public ResponseEntity<?> getAllUser(@PathVariable int pageIndex, @PathVariable int pageSize) {
        try {
            return ResponseEntity.ok(userService.getAllUser(pageIndex, pageSize));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse("userList is empty"));
        }
    }

    @PostMapping(value = "/change-password")
    public ResponseEntity<String> resetPassword(@RequestBody RequestChangePassword request) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        try {
            User user = userService.loadUserByUsername(username);
            if (request.getOldPassword().equals(request.getNewPassword())) {
                return ResponseEntity.badRequest().body("new password and old password cannot be the same");
            }
            user.setPassword(encoder.encode(request.getNewPassword()));
            userService.save(user);
            return ResponseEntity.ok("success");
        } catch (Exception exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

}
