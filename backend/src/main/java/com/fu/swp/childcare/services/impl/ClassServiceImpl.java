package com.fu.swp.childcare.services.impl;

import com.fu.swp.childcare.model.Classes;
import com.fu.swp.childcare.repositories.ClassRepository;
import com.fu.swp.childcare.services.ClassService;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class ClassServiceImpl implements ClassService {

    @Autowired
    ClassRepository classRepository;

    @Override
    public List<Classes> findALl() {
        return (List<Classes>) classRepository.findAll();
    }

    @Override
    public Classes findById(String id) {
        return classRepository.findById(id).orElseThrow(()-> new ObjectNotFoundException(this,"Class not found"));
    }

}
