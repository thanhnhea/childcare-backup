package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.model.Classes;
import com.fu.swp.childcare.repositories.ClassRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class ClassService {
    final
    ClassRepository classRepository;

    final
    ChildrenService childrenService;

    public ClassService(ClassRepository classRepository, ChildrenService childrenService) {
        this.classRepository = classRepository;
        this.childrenService = childrenService;
    }

    public Classes getClassById(String id) {
        return classRepository.findById(Long.parseLong(id)).orElseThrow(() -> new ObjectNotFoundException("Not found", new Object()));
    }

    public Page<Classes> getAllClass(Pageable pageable) {
        return classRepository.findAll(pageable);
    }

    public void save(Classes c) {
        classRepository.save(c);
    }

    public void assignChild(String childID , String classID){
        ChildInformation childInformation = childrenService.getChildById(childID) ;
        Classes classes = classRepository.findById(Long.parseLong(classID)).orElseThrow();
        classes.setChildInformation(childInformation);
        classRepository.save(classes);
    }
}

