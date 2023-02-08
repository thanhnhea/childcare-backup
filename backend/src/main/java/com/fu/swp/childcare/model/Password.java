package com.fu.swp.childcare.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "passwords")
@Getter
@Setter
public class Password {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String hashedPassword;

    @Column(nullable = false)
    private String salt;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
