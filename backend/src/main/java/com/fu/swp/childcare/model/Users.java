package com.fu.swp.childcare.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Users {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String gender;
    private String email;
    private String phone;

    @OneToOne
    @JoinColumn(name = "role_id")
    Role role;

    private boolean userStatus;

}
