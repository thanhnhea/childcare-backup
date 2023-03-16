package com.fu.swp.childcare.controller;


import com.fu.swp.childcare.model.Post;
import com.fu.swp.childcare.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/post")
public class PostController {
    @Autowired
    PostService postService;

    @PostMapping("/create")
    @PreAuthorize("hasRole('USER') or hasRole('ROLE_MANAGER') or hasRole('ADMIN')")
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        Post createdPost = postService.createPost(post);
        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }


}
