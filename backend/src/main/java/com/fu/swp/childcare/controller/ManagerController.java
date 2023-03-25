package com.fu.swp.childcare.controller;

import com.fu.swp.childcare.controller.mapping.ChildrenInfoDto;
import com.fu.swp.childcare.controller.mapping.ClassDTO;
import com.fu.swp.childcare.model.*;
import com.fu.swp.childcare.payload.AssignClass;
import com.fu.swp.childcare.payload.ChildProfile;
import com.fu.swp.childcare.payload.ClassDetail;
import com.fu.swp.childcare.payload.ServiceRequest;
import com.fu.swp.childcare.payload.response.BookingServiceListResponse;
import com.fu.swp.childcare.payload.response.MessageResponse;
import com.fu.swp.childcare.repositories.RoleRepository;
import com.fu.swp.childcare.repositories.ServiceRepository;
import com.fu.swp.childcare.services.*;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
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
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@RequestMapping("/api/mod")
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ManagerController {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    ChildrenService childrenService;

    @Autowired
    MailService emailService;

    @Autowired
    ServiceRepository serviceRepository;

    @Autowired
    CategoryService categoryService;

    @Autowired
    BookingListService bookingListService;

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
            System.out.println(classDTO.toString());
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

    @PostMapping("/class/new")
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

    @PostMapping("/class/edit")
    @PreAuthorize("hasRole('ROLE_MANAGER')")
    public ResponseEntity<?> editClass(@RequestBody @Valid ClassDetail classDetail) {
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

            Classes clas = classService.getClassById(classDetail.getId());
            if (!classDetail.getClassName().isEmpty()) {
                clas.setClassName(classDetail.getClassName());
            }
            if (classDetail.getStartDate() != null) {
                LocalDate sdate = LocalDate.parse(classDetail.getStartDate(), formatter);
                clas.setStartDate(sdate);

            }
            if (classDetail.getEndDate() != null) {
                LocalDate edate = LocalDate.parse(classDetail.getEndDate(), formatter);
                clas.setEndDate(edate);
            }
            if (classDetail.getAgeRange() != null) {
                clas.setAgeRange(clas.getAgeRange());
            }
            if (classDetail.getDescription() != null) {
                clas.setDescription(clas.getDescription());
            }
            if (classDetail.getService() != null) {
                Service s = serviceRepository.findById(Long.valueOf(classDetail.getService())).orElseThrow();
                clas.setService(s);
            }
            classService.save(clas);
            return ResponseEntity.ok(classDetail);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/class/delete")
    public ResponseEntity<?> deleteClass(@RequestParam String id) {
        boolean deleted = classService.deleteClass(id);
        if(deleted){
            return ResponseEntity.ok().body("Class Deleted");
        }
        return ResponseEntity.badRequest().body("Deleted Class Failed");
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
            System.out.println("line 127: EMAIL " + parents.getEmail());

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
        List<ChildrenInfoDto> childrenInfoDTOs = children.stream().map(ChildInformation::toChildrenInfoDto).collect(Collectors.toList());
        System.out.println(childrenInfoDTOs);
        if (children.isEmpty())
            return ResponseEntity.badRequest().body("children list is empty");
        else
            return ResponseEntity.ok(childrenInfoDTOs);
    }

    @GetMapping(value = "/assignedChild")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> assignedChildList(@RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "10") int size) {
        List<ChildInformation> children = childrenService.getAssignedChild();
        System.out.println(children);
        List<ChildrenInfoDto> childrenInfoDTOs = children.stream().map(ChildInformation::toChildrenInfoDto).collect(Collectors.toList());
        System.out.println(childrenInfoDTOs);
        if (children.isEmpty())
            return ResponseEntity.badRequest().body("children list is empty");
        else
            return ResponseEntity.ok(childrenInfoDTOs);
    }


    @GetMapping(value = "/class/children")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> getALlChildrenFromClass(@RequestParam long id) {
        List<ChildInformation> children = childrenService.getChildrenFromClass(id);
        System.out.println(children);
        return children.isEmpty()
                ? ResponseEntity.badRequest().body("Class haven't had any children")
                : ResponseEntity.ok(children.stream().map(ChildInformation::toChildrenInfoDto).collect(Collectors.toList()));
    }

    @PostMapping("/services/new")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> newService(@RequestBody ServiceRequest request) {
        if (request == null) {
            return ResponseEntity.badRequest().body("bad request");
        }
        Optional<Category> categories = categoryService.getAllCategory().stream().filter(category -> Objects.equals(category.getName(), request.getCategory())).findFirst();
        Category selectedCategory = categories.orElse(null);
        System.out.println(categories);
        System.out.println(request);
        Service s = new Service();
        s.setServiceTitle(request.getTitle());
        s.setServicePrice(request.getPrice());
        s.setServiceDetail(request.getDetails());
        s.setCreatedDate(LocalDate.now());
        s.setCategory(selectedCategory);
        try {
            serviceRepository.save(s);
            return ResponseEntity.ok(s);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    /**
     * get all roles available for manager to pick
     *
     * @return roles list
     */
    @GetMapping(value = "role/all")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> getAllRoles() {
        List<Role> roles = roleRepository.findAll();
        return roles.isEmpty() ? ResponseEntity.badRequest().body("There is no roles") : ResponseEntity.ok(roles);
    }

    @GetMapping("/booking/all")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> getBookingList() {
        return ResponseEntity.ok().body(bookingListService.getAll().stream().map(ServiceBookingList::toBookingServiceListResponse).toList());
    }

    @PostMapping("/booking/approve")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> approveBooking(@RequestBody BookingServiceListResponse booking) {
        try {
            System.out.println(booking.getId());
            ServiceBookingList serviceBookingList = bookingListService.getServiceBookingList(booking.getId());
            serviceBookingList.setStatus(ServiceBookingList.APPROVED);
            bookingListService.save(serviceBookingList);
            try {
                emailService.sendHtmlMessage(serviceBookingList.getCustomer().getEmail(), "Service Booking successfully!",
                        "Service " + serviceBookingList.getServiceId().getServiceTitle() + " booking have been approved" +
                                " has booked successful\n" +
                                " at " + serviceBookingList.getCreateDate() + "\n" +
                                " for child " + serviceBookingList.getChildID().getFirstName() + " " + serviceBookingList.getChildID().getLastName() + "\n" +
                                "with service price is " + serviceBookingList.getServiceId().getServicePrice());
            } catch (Exception e) {
                e.printStackTrace();
            }
            return ResponseEntity.ok().body(ServiceBookingList.APPROVED);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/booking/deny")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<?> denyBooking(@RequestBody BookingServiceListResponse booking) {
        try {
            ServiceBookingList serviceBookingList = bookingListService.getServiceBookingList(booking.getId());
            serviceBookingList.setStatus(ServiceBookingList.DENIED);
            bookingListService.save(serviceBookingList);
            return ResponseEntity.ok().body(ServiceBookingList.DENIED);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/booking")
    public ResponseEntity<?> getBookingDetails(@RequestParam String id) {
        try {
            ServiceBookingList serviceBookingList = bookingListService.getServiceBookingList(id);
            BookingServiceListResponse bookingDetail = serviceBookingList.toBookingServiceListResponse();
            return ResponseEntity.ok(bookingDetail);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


}
