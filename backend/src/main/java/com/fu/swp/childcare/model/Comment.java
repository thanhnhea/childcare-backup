package com.fu.swp.childcare.model;

import com.fu.swp.childcare.controller.mapping.CommentDTO;
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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(length = 2000)
    private String commentText;

    @Column(nullable = false)
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    public CommentDTO toDTO(){
        return new CommentDTO(this.id.toString(),this.commentText,this.createdDate,this.updatedDate,this.user.toUserDto());
    }
}
