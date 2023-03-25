package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    UserService s;
    @GetMapping("/userList")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> findUsers(){
        List<User> userList = s.getAllUser();
        System.out.println(userList);
        if(userList==null){
            return new  ResponseEntity("Userlist 's empty",HttpStatus.OK);
        }else {
            return new ResponseEntity<>(userList, HttpStatus.OK);
        }

    }
    @GetMapping("/userDetails")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> userDetails(@RequestParam String username){
        User u = s.getUserDetail(username);

        if(u != null){
            return new ResponseEntity<>(u, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User's not found", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteUser(@RequestParam String id){
        try{
            s.deleteUser(id);
            return ResponseEntity.ok().body("User Deleted");
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
