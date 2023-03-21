package com.fu.swp.childcare.services;

import com.fu.swp.childcare.controller.mapping.PostDTO;
import com.fu.swp.childcare.exception.ResourceNotFoundException;
import com.fu.swp.childcare.model.Post;
import com.fu.swp.childcare.payload.PostRequest;
import com.fu.swp.childcare.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;

    public Post createPost(PostRequest request) {
        Post createPost = new Post();
        createPost.setTitle(request.getTitle());
        createPost.setContent(request.getContent());
        createPost.setCreatedDate(LocalDateTime.now());
        return postRepository.save(createPost);
    }

    public Post findById(String id){
        return postRepository.findById(Long.valueOf(id)).orElseThrow(()-> new ResourceNotFoundException("Post Not Found"));
    }

    public PostDTO getPostDetail (String id) {
        Post post =  postRepository.findById(Long.valueOf(id)).orElseThrow(() -> new ResourceNotFoundException("Post not found"));
        return post.toDTO();
    }

    public Post editPost(PostRequest request){
        Post p = findById(request.getId());
        return postRepository.save(p);
    }
}