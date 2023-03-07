package com.fu.swp.childcare.services;

import com.fu.swp.childcare.repositories.ServiceRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import com.fu.swp.childcare.model.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@org.springframework.stereotype.Service
public class RegistrationService {

    @Autowired
    ServiceRepository serviceRepository;

    public Service getServiceById(String id) {
        return serviceRepository.findById(Long.parseLong(id)).orElseThrow(() -> new ObjectNotFoundException("Not found", new Object()));
    }

    public Page<Service> getAllServices(Pageable pageable) {
        return serviceRepository.findAll(pageable);
    }

    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }
}
