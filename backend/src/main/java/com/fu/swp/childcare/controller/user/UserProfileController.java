package com.fu.swp.childcare.controller.user;


import com.fu.swp.childcare.controller.mapping.UserDto;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.services.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserProfileController {

    @Autowired
    private UserProfileService userService;


    @GetMapping(value = "/users")
    public ResponseEntity<List<UserDto>> getAllUser() {
        try {
            return ResponseEntity.ok(userService.getAllUser());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<UserDto> getById(@PathVariable Long id){
        try {
             return ResponseEntity.ok(userService.getUserById(id).toUserDto());
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value = "/change-password")
    public ResponseEntity<String> resetPassword(@Valid @RequestBody User newUser) {
        try {
            User oldUser = userService.getUserById(newUser.getId());
            if (oldUser.getPassword().equals(newUser.getPassword())) {
                return ResponseEntity.badRequest().body("new password and old password cannot be the same");
            }
            return ResponseEntity.ok("success");
        } catch (Exception exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

}
