package com.fu.swp.childcare.model;

import jakarta.persistence.*;

@Entity
@Table(name = "passwords")
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
