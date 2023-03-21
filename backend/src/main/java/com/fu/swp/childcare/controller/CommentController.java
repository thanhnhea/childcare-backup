package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.model.Comment;
import com.fu.swp.childcare.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts/{postId}/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping
    public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody Comment comment) {
        Comment createdComment = commentService.createComment(postId, comment);
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }
}
