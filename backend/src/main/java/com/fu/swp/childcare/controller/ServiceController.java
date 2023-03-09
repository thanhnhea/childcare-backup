package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.controller.mapping.ServiceDto;
import com.fu.swp.childcare.model.Service;
import com.fu.swp.childcare.repositories.ServiceRepository;
import com.fu.swp.childcare.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/service")
public class ServiceController {

    @Autowired
    RegistrationService registrationService;

    @Autowired
    ServiceRepository serviceRepository;

    @GetMapping("/all-service")
    public ResponseEntity<?> getAllServices() {
        List<ServiceDto> services = new ArrayList<>();

        try {
            services = registrationService.getAllServices();
            services.forEach(System.out::println);
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


    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        try{
            List<ServiceDto> serviceDtoList = serviceRepository.findAll().stream().map(Service::toServiceDto).toList();
            return ResponseEntity.ok().body(serviceDtoList) ;
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e);
        }
    }

}
