package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.model.Service;
import com.fu.swp.childcare.repositories.ServiceRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/user/api/cart")
public class CustomerController {

    ServiceRepository serviceRepository;

    public CustomerController(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @GetMapping
    public ResponseEntity<?> getALl() {
        return ResponseEntity.ok(serviceRepository.findAll());
    }

}
