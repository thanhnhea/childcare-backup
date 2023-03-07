package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.model.Classes;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.AssignClass;
import com.fu.swp.childcare.payload.ChildProfile;
import com.fu.swp.childcare.payload.ClassDetail;
import com.fu.swp.childcare.payload.response.MessageResponse;
import com.fu.swp.childcare.services.ChildrenService;
import com.fu.swp.childcare.services.ClassService;
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
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/mod")
@RestController
public class ManagerController {

    @Autowired
    ChildrenService childrenService;


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
            return ResponseEntity.ok(clas);
        } catch (Exception ex) {
            return new ResponseEntity<>("Class Not Found", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/classes")
    @PreAuthorize("hasRole('ROLE_MANAGER')")
    public ResponseEntity<?> getAllClass(@RequestParam(defaultValue = "0") int page,
                                         @RequestParam(defaultValue = "10") int size) {
        Pageable paging = PageRequest.of(page, size);
        Page<Classes> pageResult = classService.getAllClass(paging);
        if (pageResult.isEmpty()) {
            return ResponseEntity.badRequest().body("Class list is empty");
        } else {
            return new ResponseEntity<>(pageResult.getContent(), HttpStatus.OK);
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

            Classes clas = new Classes();
            clas.setCreatedPerson(currentUser);
            clas.setClassName(classDetail.getClassName());
            clas.setDescription(classDetail.getDescription());
            clas.setStartDate(classDetail.getStartDate());
            clas.setEndDate(classDetail.getEndDate());
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
            classService.assignChild(assignClass.getChildId(), assignClass.getClassId());
            String msg = "Saved " + assignClass.getChildId() + " into " + assignClass.getClassId();
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

}
