package com.fu.swp.childcare.controller;


import com.fu.swp.childcare.controller.mapping.PostDTO;
import com.fu.swp.childcare.model.Post;
import com.fu.swp.childcare.payload.PostRequest;
import com.fu.swp.childcare.services.PostService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/post")
public class PostController {
    @Autowired
    PostService postService;

    @PostMapping(
            value = "/create",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<?> createPost(@RequestParam("file") MultipartFile file) {
        try{
            System.out.println("controller here ");
            System.out.println(file);
            return new ResponseEntity<>(file, HttpStatus.CREATED);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @GetMapping()
    public ResponseEntity<?> viewPost(@RequestParam String id){
     try{
         PostDTO postDTO = postService.getPostDetail(id);
         return ResponseEntity.ok().body(postDTO);
     }catch (Exception e){
         return ResponseEntity.badRequest().body(e.getMessage());
     }
    }

    @PostMapping("/edit")
    @PreAuthorize("hasRole('USER') or hasRole('ROLE_MANAGER') or hasRole('ADMIN')")
    public ResponseEntity<?> editPost(@RequestBody PostRequest request){
        try{
            Post createdPost = postService.editPost(request);
            return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
