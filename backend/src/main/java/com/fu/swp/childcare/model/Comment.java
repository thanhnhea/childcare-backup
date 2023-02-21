package com.fu.swp.childcare.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "comment")
public class Comment {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(nullable = false)
    private String commentText;

    @Column(nullable = false)
    private LocalDateTime dateTime;

    @OneToOne
    @JoinColumn(name = "blog_id")
    private Blog blog;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
