package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.Category;
import com.fu.swp.childcare.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;


    public List<Category> getAllCategory(){
        return categoryRepository.findAll();
    }
}
