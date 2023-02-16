package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.model.Blog;
import com.fu.swp.childcare.services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/blog")
public class BlogController {
    @Autowired
    private BlogService blogService;

    @GetMapping("/blogList")
    public ResponseEntity<?> findBlogs(@RequestParam(defaultValue = "0") int page,
                                                @RequestParam(defaultValue = "10") int size) {
        Pageable paging = PageRequest.of(page, size);
        Page<Blog> pageResult = blogService.getAllBlog(paging);
        if (pageResult.isEmpty()) {
            return new ResponseEntity("Bloglist's empty", HttpStatus.OK);
        } else {
            return new ResponseEntity<>(pageResult.getContent(), HttpStatus.OK);
        }
    }

//    @GetMapping("/blogListByTitle")
//    public ResponseEntity<?> findBlogsByTitle(@RequestBody String title) {
//    }

 //   @GetMapping("/blogListByAuthor")
//    public ResponseEntity<?> findBlogsByAuthor(@RequestBody String title) {
//    }

    @GetMapping("/blogDetail")
    public ResponseEntity<?> findBlogByID(@RequestParam String id) {
        Blog bl = blogService.blogDetail(id);
        System.out.println(bl);
        if (bl != null) {
            return new ResponseEntity<>(bl, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Blog's not found", HttpStatus.BAD_REQUEST);
        }
    }



}
