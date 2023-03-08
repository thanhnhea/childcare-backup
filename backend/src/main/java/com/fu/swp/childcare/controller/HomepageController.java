package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.controller.mapping.ServiceDto;
import com.fu.swp.childcare.model.Service;
import com.fu.swp.childcare.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        List<ServiceDto> services = new ArrayList<>();
        try {
            services = registrationService.getAllServices();
        } catch (Exception e) {
            ResponseEntity.badRequest().body(e.getMessage());
        }
        return services.isEmpty() ? ResponseEntity.badRequest().body("There is no service!") : ResponseEntity.ok(services);
    }

    @GetMapping(value = "service")
    public ResponseEntity<?> getServiceDetail(@RequestParam String id) {
        ServiceDto service = null;
        try {
            service = registrationService.getServiceById(id).toServiceDto();
        } catch (Exception e) {
            ResponseEntity.badRequest().body(e.getMessage());
        }
        return service == null ? ResponseEntity.badRequest().body("Service doesn't exist!") : ResponseEntity.ok(service);

    }


}
