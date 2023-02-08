package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.payload.LoginRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @GetMapping("/")
    public String testConnection(){
        return "hello world from api auth";
    }

    @PostMapping(path = "/signin")
    public ResponseEntity<?> authenticate(@Valid @RequestBody LoginRequest request){
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(request.getUsername(),request.getPassword());
        System.out.println(usernamePasswordAuthenticationToken.getCredentials());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> register(@Valid @RequestBody LoginRequest  reuqest){
        System.out.println(reuqest);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
