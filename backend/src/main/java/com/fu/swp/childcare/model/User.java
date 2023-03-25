package com.fu.swp.childcare.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fu.swp.childcare.controller.mapping.UserDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    private String firstName;

    private LocalDate dob;
    private String lastName;
    private String phone;
    private String address;

    private String pfpImgLink;

    @NotBlank
    @Size(max = 120)
    private String password;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(  name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(String username, String email, String firstName, String lastName, String phone, String address, String password) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.password = password;
    }

    public User(String username, String email, String firstName, String lastName, String phone, String address, String password, Set<Role> roles) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.password = password;
        this.roles = roles;
    }

    public UserDto toUserDto() {
        UserDto toUser = new UserDto();
        toUser.setId(id);
        toUser.setEmail(email);
        toUser.setAddress(address);
        toUser.setPhone(phone);
        toUser.setUsername(username);
        toUser.setFirstName(firstName);
        toUser.setLastName(lastName);
        toUser.setRole(roles);
        toUser.setPfpImageLink(pfpImgLink);
        return toUser;
    }
}
