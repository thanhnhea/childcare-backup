package com.fu.swp.childcare.controller.mapping;

import com.fu.swp.childcare.model.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
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
    }

