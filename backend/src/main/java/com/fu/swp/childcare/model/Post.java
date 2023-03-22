package com.fu.swp.childcare.model;


import com.fu.swp.childcare.controller.mapping.PostDTO;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String title;
    private String content;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

    private String imageLink; //s3 key
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Comment> comments;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    public PostDTO toDTO(){
        return new PostDTO(this.id.toString(),this.title
                ,this.content,this.createdDate,this.user.toUserDto(),this.imageLink,this.comments);
    }

}
