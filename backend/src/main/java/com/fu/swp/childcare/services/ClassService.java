package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.Classes;
import com.fu.swp.childcare.repositories.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class ClassService {
    @Autowired
    ClassRepository classRepository;

    public List<Classes> getALl (){
        return new ArrayList<>((Collection) classRepository.findAll());
    }


}

