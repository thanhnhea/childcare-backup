package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.model.Comment;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.CommentRequest;
import com.fu.swp.childcare.services.CommentService;
import com.fu.swp.childcare.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/post/comments")
public class CommentController {


    private final CommentService commentService;

    private final UserService userService;

    @Autowired
    public CommentController(CommentService commentService, UserService userService) {
        this.commentService = commentService;
        this.userService = userService;
    }

    @PostMapping("/submit")
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> createComment(@RequestBody CommentRequest request) {
       try{
           UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                   .getPrincipal();
           User currentUser = userService.getUserDetail(userDetails.getUsername());
           Comment createdComment = commentService.createComment(Long.valueOf(request.getPostId()), request.getContent() , currentUser);
           return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
       }catch (Exception e){
           return ResponseEntity.badRequest().body(e.getMessage());
       }
    }
}
