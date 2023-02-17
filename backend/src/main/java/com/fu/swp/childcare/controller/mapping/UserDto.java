package com.fu.swp.childcare.controller.mapping;


import com.fu.swp.childcare.model.Role;
import com.fu.swp.childcare.model.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private String address;
    private Set<Role> role;
}


