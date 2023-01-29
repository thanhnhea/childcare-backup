package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.auth.LoginRequest;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
//    private final UserDetailsService userDetailsService;
//    @Autowired
//    private PasswordEncoder passwordEncoder;

//    @Autowired
//    public AuthController(UserDetailsService userDetailsService) {
//        this.userDetailsService = userDetailsService;
//    }

//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
//        try {
//            // Load user details
//            UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
//
//            // Verify password
//            if (!passwordEncoder.matches(request.getPassword(), userDetails.getPassword())) {
//                return ResponseEntity.badRequest().body("Invalid credentials");
//            }
//
//            String token = Jwts.builder()
//                    .setSubject(userDetails.getUsername())
//                    .claim("roles", userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
//                    .setIssuedAt(new Date())
//                    .setExpiration(new Date(System.currentTimeMillis() + 3600000)) // 1 hour
//                    .signWith(SignatureAlgorithm.HS512, "secretkey")
//                    .compact();
//
//            // Return JWT token
//            return ResponseEntity.ok(token);
//
//        } catch (UsernameNotFoundException e) {
//            return ResponseEntity.badRequest().body("Invalid credentials");
//        }
//    }

}
