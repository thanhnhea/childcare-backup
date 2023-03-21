package com.fu.swp.childcare.services;

import com.fu.swp.childcare.exception.ResourceNotFoundException;
import com.fu.swp.childcare.model.Comment;
import com.fu.swp.childcare.model.Post;
import com.fu.swp.childcare.repositories.CommentRepository;
import com.fu.swp.childcare.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private PostRepository postRepository;

    public Comment createComment(Long postId, Comment comment) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post not found"));
        comment.setPost(post);
        return commentRepository.save(comment);
    }
}
