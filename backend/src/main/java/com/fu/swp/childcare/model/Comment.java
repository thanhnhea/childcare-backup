package com.fu.swp.childcare.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Comment {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private String createdDate;
    private String updatedDate;

    @OneToOne
    @JoinColumn(name = "users_id")
    Users users;

    @ManyToOne
    @JoinColumn(name = "blog_id")
    Blog blog;
}
