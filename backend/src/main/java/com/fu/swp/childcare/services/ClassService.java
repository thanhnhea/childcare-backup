package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.Classes;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ClassService {

    List<Classes> findALl();

    Classes findById(String id);

}
