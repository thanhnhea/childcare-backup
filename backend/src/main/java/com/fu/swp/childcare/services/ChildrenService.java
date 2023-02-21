package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.repositories.ChildrenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class ChildrenService {

    @Autowired
    ChildrenRepository childrenRepository;

    public List<ChildInformation> loadAllChildren(){
        return new ArrayList<>((Collection) childrenRepository.findAll());
    }

    public List<ChildInformation> loadAllChildrenFromUser(long id){
        return new ArrayList<>((Collection) childrenRepository.loadChildrenFromUserId(id));
    }

    public void save(ChildInformation child){
        childrenRepository.save(child);
    }


}
