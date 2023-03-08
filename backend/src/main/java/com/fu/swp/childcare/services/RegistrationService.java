package com.fu.swp.childcare.services;

import com.fu.swp.childcare.controller.mapping.ServiceDto;
import com.fu.swp.childcare.repositories.ServiceRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import com.fu.swp.childcare.model.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.stream.Collectors;

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

    public List<ServiceDto> getAllServices() {
        return serviceRepository.findAll().stream().map(Service::toServiceDto).collect(Collectors.toList());
    }
}
