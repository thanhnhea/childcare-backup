package com.fu.swp.childcare.services;

import com.fu.swp.childcare.controller.mapping.ClassDTO;
import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.model.Classes;
import com.fu.swp.childcare.repositories.ClassRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

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

    public List<ClassDTO> getAllClass() {
        List<Classes> clas =  classRepository.findAll() ;
        return clas.stream().map(Classes::toClassDTO).collect(Collectors.toList());
    }

    public List<Classes> getAllAvailableClass() {
        List<Classes> classes = classRepository.findAll();
        List<Classes> filteredClass = new ArrayList<>();
        for (Classes selectedClass : classes) {
            if (selectedClass.getChildInformation().size() < CLASS_CAPACITY) {
                filteredClass.add(selectedClass);
            }
        }
        return filteredClass;
    }

    public void save(Classes c) {
        classRepository.save(c);
    }

    public void assignChild(String childID, String classID) {
        ChildInformation childInformation = childrenService.getChildById(childID);
        childInformation.setStatus(true);
        Classes classes = classRepository.findById(Long.parseLong(classID)).orElseThrow();

        classes.getChildInformation().add(childInformation);
        classRepository.save(classes);
    }

    public boolean deleteClass(String id){
        Classes clas = classRepository.findById(Long.parseLong(id)).orElseThrow(()-> new IllegalStateException("Class not found"));
        if(clas.getChildInformation().size() > 0){
            return false;
        }
        classRepository.delete(clas);
        return true;
    }

    static final int CLASS_CAPACITY = 32;
}

