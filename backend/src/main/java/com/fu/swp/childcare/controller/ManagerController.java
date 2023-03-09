package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.controller.mapping.ClassDTO;
import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.model.Classes;
import com.fu.swp.childcare.model.Service;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.AssignClass;
import com.fu.swp.childcare.payload.ChildProfile;
import com.fu.swp.childcare.payload.ClassDetail;
import com.fu.swp.childcare.payload.ServiceRequest;
import com.fu.swp.childcare.payload.response.MessageResponse;
import com.fu.swp.childcare.repositories.ServiceRepository;
import com.fu.swp.childcare.services.ChildrenService;
import com.fu.swp.childcare.services.ClassService;
import com.fu.swp.childcare.services.MailService;
import com.fu.swp.childcare.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/mod")
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ManagerController {

    @Autowired
    ChildrenService childrenService;

    @Autowired
    MailService emailService;

    @Autowired
    ServiceRepository serviceRepository;

    @Autowired
    ClassService classService;

    @Autowired
    UserService userService;

    @GetMapping("/children")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> getAllChildren(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable paging = PageRequest.of(page, size);
        Page<ChildInformation> children = childrenService.loadAllChildren(paging);
        if (children.isEmpty()) {
            return new ResponseEntity(new MessageResponse("theres no children"), HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(children.getContent().stream().map(ChildInformation::toChildrenInfoDto).collect(Collectors.toList()), HttpStatus.OK);
        }
    }

    @GetMapping("/class")
    @PreAuthorize("hasRole('ROLE_MANAGER')")
    public ResponseEntity<?> getClassDetails(@RequestParam String id) {
        try {
            Classes clas = classService.getClassById(id);
            ClassDTO classDTO = clas.toClassDTO();
            return ResponseEntity.ok(classDTO);
        } catch (Exception ex) {
            return new ResponseEntity<>("Class Not Found", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/classes")
    @PreAuthorize("hasRole('ROLE_MANAGER')")
    public ResponseEntity<?> getAllClass(@RequestParam(defaultValue = "0") int page,
                                         @RequestParam(defaultValue = "10") int size) {
        Pageable paging = PageRequest.of(page, size);
        List<ClassDTO> pageResult = classService.getAllClass();
        if (pageResult.isEmpty()) {
            return ResponseEntity.badRequest().body("Class list is empty");
        } else {
            return new ResponseEntity<>(pageResult, HttpStatus.OK);
        }
    }

    @GetMapping("/available-classes")
    @PreAuthorize("hasRole('ROLE_MANAGER')")
    public ResponseEntity<?> getAllClass() {
        List<Classes> classes = classService.getAllAvailableClass();
        if (classes.isEmpty()) {
            return ResponseEntity.badRequest().body("Class list is empty");
        } else {
            return new ResponseEntity<>(classes, HttpStatus.OK);
        }
    }

    @PostMapping("/newClass")
    @PreAuthorize("hasRole('ROLE_MANAGER')")
    public ResponseEntity<?> createNewClass(@RequestBody @Valid ClassDetail classDetail) {
        try {
            UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                    .getPrincipal();
            User currentUser = userService.getUserDetail(userDetails.getUsername());

            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            LocalDate sdate = LocalDate.parse(classDetail.getStartDate(), formatter);
            LocalDate edate = LocalDate.parse(classDetail.getEndDate(), formatter);

            Classes clas = new Classes();
            clas.setCreatedPerson(currentUser);
            clas.setClassName(classDetail.getClassName());
            clas.setDescription(classDetail.getDescription());
            clas.setStartDate(sdate);
            clas.setAgeRange(classDetail.getAgeRange());
            Service s = serviceRepository.findById(Long.valueOf(classDetail.getService())).orElseThrow();
            clas.setService(s);
            clas.setEndDate(edate);
            clas.setCreatedDate(LocalDate.now());
            classService.save(clas);
            return ResponseEntity.ok(classDetail);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getLocalizedMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/assignChild")
    @PreAuthorize("hasRole('ROLE_MANAGER')")
    public ResponseEntity<?> assignChild(@RequestBody @Valid AssignClass assignClass) {
        try {
            String childID = assignClass.getChildId();
            classService.assignChild(assignClass.getChildId(), assignClass.getClassId());
            ChildInformation child = childrenService.getChildById(childID);
            User parents = child.getUser();
            String msg = "Saved " + assignClass.getChildId() + " into " + assignClass.getClassId();
            System.out.println("line 127: EMAIL "+parents.getEmail());

            emailService.sendHtmlMessage(
                    parents.getEmail(),
                    "Your child have been assign to a class",
                    "Dear mr. " + parents.getFirstName() + ", your child have been assign to a class");
            return ResponseEntity.ok(msg);
        } catch (Exception exception) {
            return new ResponseEntity<>(exception.getLocalizedMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(value = "/unassignedChild")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> unassignedChildList(@RequestParam(defaultValue = "0") int page,
                                                 @RequestParam(defaultValue = "10") int size) {
        Pageable paging = PageRequest.of(page, size);
        Page<ChildInformation> children = childrenService.getUnassignedChild(paging);

        if (children.isEmpty())
            return ResponseEntity.badRequest().body("children list is empty");
        else
            return ResponseEntity.ok(children);
    }

    @PostMapping("/newService")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> newService(@RequestBody ServiceRequest request){
        if(request == null){
            return ResponseEntity.badRequest().body("bad request");
        }
        Service s = new Service();
        s.setServiceTitle(request.getTitle());
        s.setServicePrice(request.getPrice());
        s.setServiceDetail(request.getDetails());
        s.setCreatedDate(LocalDate.now());
        serviceRepository.save(s);
        return ResponseEntity.ok(s);
    }

}
