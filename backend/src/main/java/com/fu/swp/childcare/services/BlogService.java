package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.Blog;
import com.fu.swp.childcare.repositories.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class BlogService {

    @Autowired
    BlogRepository blogRepository;
    public Page<Blog> getAllBlog(Pageable pageable){
        return blogRepository.findAll(pageable);
    }
    public List<Blog> getBlogByAuthor(String author){
        return blogRepository.findBlogByAuthorContainingIgnoreCase(author);
    }
    public List<Blog> getBlogByTitle(String title){
        return blogRepository.findBlogByTitleNotContainingIgnoreCase(title);
    }
    public List<Blog> getBlogByCategory(String cate){
        return blogRepository.findBlogByCategory(cate);
    }
    public Blog blogDetail(String id){
        Blog b = blogRepository.getBlogById(id).orElseThrow(() -> new
                UsernameNotFoundException("Blog's Not Found with that id: " + id));
        return b ;
    }
}
