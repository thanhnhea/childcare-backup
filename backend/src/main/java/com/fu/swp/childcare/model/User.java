package com.fu.swp.childcare.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fu.swp.childcare.controller.mapping.UserDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    private String phone;

    private String address;

    // other properties

    @OneToOne(mappedBy = "user")
    private Password password;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;


    public UserDto toUserDto() {
        UserDto toUser = new UserDto();
        toUser.setId(id);
        toUser.setEmail(email);
        toUser.setAddress(address);
        toUser.setPhone(phone);
        toUser.setUsername(username);
        toUser.setFirstName(firstName);
        toUser.setLastName(lastName);
        toUser.setRole(role);
        return toUser;
    }
}
