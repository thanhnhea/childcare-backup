package com.fu.swp.childcare.controller;


import com.fu.swp.childcare.controller.mapping.PostDTO;
import com.fu.swp.childcare.model.Post;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.PostRequest;
import com.fu.swp.childcare.services.PostService;
import com.fu.swp.childcare.services.UserService;
import lombok.Getter;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("api/post")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PostController {

    PostService postService;

    UserService userService;

    @Autowired
    public PostController(PostService postService, UserService userService) {
        this.postService = postService;
        this.userService = userService;
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> createPost(@RequestParam("title") String title,
                                        @RequestParam("content") String content,
                                        @RequestParam(required = false) MultipartFile images) {
        try {
            UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                    .getPrincipal();
            User currentUser = userService.getUserDetail(userDetails.getUsername());

            postService.savePost(title, content, images, currentUser);

            return new ResponseEntity<>("Post created", HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("")
    public ResponseEntity<?> viewPost(@RequestParam String id) {
        try {
            System.out.println("post detail controller here");
            PostDTO postDTO = postService.getPostDetail(id);
            return ResponseEntity.ok().body(postDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/edit")
    @PreAuthorize("hasRole('USER') or hasRole('ROLE_MANAGER') or hasRole('ADMIN')")
    public ResponseEntity<?> editPost(@RequestBody PostRequest request) {
        try {
            Post createdPost = postService.editPost(request);
            return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/image")
    public byte[] downloadPostImage(@RequestParam String id) {
        Post p = postService.findById(id);
        return postService.downloadPostImage(p);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllPost(){
        List<PostDTO> postDTO = postService.getALlPost();
        return ResponseEntity.ok().body(postDTO);
    }
}
