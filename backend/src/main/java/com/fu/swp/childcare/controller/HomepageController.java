package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.model.Service;
import com.fu.swp.childcare.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/")
public class HomepageController {


    @Autowired
    RegistrationService registrationService;

    @GetMapping(value = "all-services")
    public ResponseEntity<?> getAllServices() {
        List<Service> services = new ArrayList<>();
        try {
            services = registrationService.getAllServices();
        } catch (Exception e) {
            ResponseEntity.badRequest().body(e.getMessage());
        }
        return services.isEmpty() ? ResponseEntity.badRequest().body("There is no service!") : ResponseEntity.ok(services);
    }


}
