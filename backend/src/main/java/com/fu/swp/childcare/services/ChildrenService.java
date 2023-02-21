package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.repositories.ChildrenRepository;
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


}
