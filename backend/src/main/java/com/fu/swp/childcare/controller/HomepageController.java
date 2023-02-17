package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.model.Service;
import com.fu.swp.childcare.repositories.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/home")
public class HomepageController {

    @Autowired
    ServiceRepository serviceRepository;

    @GetMapping("/services")
    public ResponseEntity<?> getServiceList(){
        List<Service> services = (List<Service>) serviceRepository.findAll();
        return ResponseEntity.ok(services) ;
    }
}
