package com.fu.swp.childcare.controller.user;


import com.fu.swp.childcare.controller.mapping.UserDto;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.response.MessageResponse;
import com.fu.swp.childcare.services.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/account")
public class UserController {

    @Autowired
    private UserProfileService userService;

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

    @GetMapping(value = "/users/{pageIndex}/{pageSize}")
    public ResponseEntity<?> getAllUser(@PathVariable int pageIndex, @PathVariable int pageSize) {
        try {
            return ResponseEntity.ok(userService.getAllUser(pageIndex, pageSize));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse("userList is empty"));
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<UserDto> getById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(userService.getUserById(id).toUserDto());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value = "/change-password")
    public ResponseEntity<String> resetPassword(@Valid @RequestBody User newUser) {
        try {
            User oldUser = userService.getUserById(newUser.getId());
            if (encoder.matches(newUser.getPassword(),oldUser.getPassword())) {
                return ResponseEntity.badRequest().body("new password and old password cannot be the same");
            }
            return ResponseEntity.ok("success");
        } catch (Exception exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

}
