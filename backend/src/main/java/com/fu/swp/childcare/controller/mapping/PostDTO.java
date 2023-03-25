package com.fu.swp.childcare.controller.mapping;

import com.fu.swp.childcare.model.Comment;
import com.fu.swp.childcare.model.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
public class PostDTO {
    private String id;
    private String title;
    private String content;
    private LocalDateTime createdDate;
    private UserDto user;
    private String imageLink;
    private List<CommentDTO> comments;

    public PostDTO(Post post) {
        this.id = String.valueOf(post.getId());
        this.title = post.getTitle();
        this.content = post.getContent();
        this.createdDate = post.getCreatedDate();
        this.user  = post.getUser().toUserDto();
        this.imageLink = post.getImageLink();
        this.comments = post.getComments().stream().map(Comment::toDTO).collect(Collectors.toList());
    }
}

