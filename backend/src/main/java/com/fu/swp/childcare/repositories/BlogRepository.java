package com.fu.swp.childcare.repositories;

import com.fu.swp.childcare.model.Blog;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface BlogRepository extends JpaRepository<Blog,Long> {

    List<Blog> findBlogByAuthorContainingIgnoreCase(String author);
    List<Blog> findBlogByTitleNotContainingIgnoreCase(String tilte);
    List<Blog> findBlogByCategory(String category);
    Optional<Blog> getBlogById(String id);
}
