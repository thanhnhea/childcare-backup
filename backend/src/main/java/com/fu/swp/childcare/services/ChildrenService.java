package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.repositories.ChildrenRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class ChildrenService {

    @Autowired
    ChildrenRepository childrenRepository;

    public Page<ChildInformation> loadAllChildren(Pageable pageable) {
        return childrenRepository.findAll(pageable);
    }

    public Page<ChildInformation> loadAllChildrenFromUser(long id, Pageable pageable) {
        return childrenRepository.loadChildrenFromUserId(id, pageable);
    }

    public void save(ChildInformation child) {
        childrenRepository.save(child);
    }

    public ChildInformation getChildById(String id)  {
        return childrenRepository.findById(Long.parseLong(id))
                .orElseThrow(() -> new EntityNotFoundException("Child Not Found"));
    }

    public Page<ChildInformation> getUnassignedChild(Pageable pageable){
        return childrenRepository.loadUnassignedChildren(pageable);
    }

    public List<ChildInformation> getUnassignedChild(){
        return childrenRepository.loadUnassignedChildren();
    }
    public List<ChildInformation> getAssignedChild(){
        return childrenRepository.loadAssignedChildren();
    }

    public List<ChildInformation> getChildrenFromClass(long id){
        return childrenRepository.loadChildrenFromClass(id);
    }

}
