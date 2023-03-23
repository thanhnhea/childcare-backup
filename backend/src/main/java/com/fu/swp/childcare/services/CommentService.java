package com.fu.swp.childcare.services;

import com.fu.swp.childcare.exception.ResourceNotFoundException;
import com.fu.swp.childcare.model.Comment;
import com.fu.swp.childcare.model.Post;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.repositories.CommentRepository;
import com.fu.swp.childcare.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    private final PostRepository postRepository;
    @Autowired
    public CommentService(CommentRepository commentRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    public Comment createComment(Long postId, String cmt , User u) {
        Post post = postRepository.findById(postId).orElseThrow(() -> new ResourceNotFoundException("Post not found"));
        Comment m = new Comment();
        m.setCommentText(cmt);
        m.setUser(u);
        m.setCreatedDate(LocalDateTime.now());
        m.setPost(post);
        return commentRepository.save(m);
    }
}
