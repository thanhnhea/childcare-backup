package com.fu.swp.childcare.controller.user;


import com.fu.swp.childcare.controller.mapping.ClassDTO;
import com.fu.swp.childcare.controller.mapping.UserDto;
import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.model.Classes;
import com.fu.swp.childcare.model.Reservation;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.BookingRequest;
import com.fu.swp.childcare.payload.ChildProfile;
import com.fu.swp.childcare.payload.RequestChangePassword;
import com.fu.swp.childcare.payload.SubmitChildrenInfoRequest;
import com.fu.swp.childcare.payload.response.MessageResponse;
import com.fu.swp.childcare.repositories.UserRepository;
import com.fu.swp.childcare.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/account")
public class UserController {

    @Autowired
    private UserProfileService userService;

    @Autowired
    private ChildrenService childrenService;

    @Autowired
    private ClassService classService;

    @Autowired
    private BookingListService bookingListService;

    @Autowired
    PasswordEncoder encoder;


    @GetMapping(value = "/users")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getAllUser() {
        try {
            return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("submit_children")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> createChildrenProfile(@Valid @RequestBody SubmitChildrenInfoRequest request) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        LocalDate dob;
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        System.out.println(request);
        dob = LocalDate.parse(request.getDob(), formatter);
        User user = userService.loadUserByUsername(username);

        ChildInformation child = new ChildInformation(
                request.getFirstName(),
                request.getLastName(),
                dob,
                request.isGender(),
                request.getInterest(),
                request.getNeeds(),
                request.getNote(),
                user
        );
        childrenService.save(child);
        return ResponseEntity.ok(new MessageResponse("Success"));
    }

    @GetMapping("current-user-children")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getCurrentUserChildren(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        User user = userService.loadUserByUsername(username);
        Pageable paging = PageRequest.of(page, size);
        Page<ChildInformation> children = childrenService.loadAllChildrenFromUser(user.getId(), paging);
        if (children.isEmpty()) {
            return new ResponseEntity(new MessageResponse("theres no children"), HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(children.getContent().stream().map(ChildInformation::toChildrenInfoDto).collect(Collectors.toList()), HttpStatus.OK);
        }
    }

    @GetMapping(value = "/users/{pageIndex}/{pageSize}")
    public ResponseEntity<?> getAllUser(@PathVariable int pageIndex, @PathVariable int pageSize) {
        try {
            return ResponseEntity.ok(userService.getAllUser(pageIndex, pageSize));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse("userList is empty"));
        }
    }

    @PostMapping(value = "/change-password")
    public ResponseEntity<String> resetPassword(@RequestBody RequestChangePassword request) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        try {
            User user = userService.loadUserByUsername(username);
            if (request.getOldPassword().equals(request.getNewPassword())) {
                return ResponseEntity.badRequest().body("new password and old password cannot be the same");
            }
            user.setPassword(encoder.encode(request.getNewPassword()));
            userService.save(user);
            return ResponseEntity.ok("success");
        } catch (Exception exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

    @GetMapping("/users/child")
    @PreAuthorize("hasRole('USER') or hasRole('ROLE_MANAGER')")
    public ResponseEntity<?> getChildProfile(@RequestParam String id) {
        try {
            ChildInformation childInfo = childrenService.getChildById(id);
            ChildProfile child = new ChildProfile(childInfo.getFirstName(), childInfo.getLastName(), childInfo.getDob(), childInfo.isGender(), childInfo.getInterest(), childInfo.getNeeds(), childInfo.getNote());
            return ResponseEntity.ok(child);
        } catch (Exception exc) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Child Not Found", exc);
        }
    }

    @PostMapping("/users/reservations")
    @PreAuthorize("hasRole('USER') or hasRole('ROLE_MANAGER')")
    public ResponseEntity<?> reservation(@RequestBody Reservation reservation) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        try {
            User user = userService.loadUserByUsername(username);
            reservation.setUser(user);

        } catch (Exception e) {

            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok("");
    }

    @GetMapping(value = "/getClassFromChild")
    @PreAuthorize(value = "hasRole('USER') or hasRole('ROLE_MANAGER')")
    public ResponseEntity<?> getClass(@RequestParam String id) {
        try {
            ChildInformation child = childrenService.getChildById(id);
            Long classId = child.getChildInformationId();
            if(classId!=null){
                Optional<ClassDTO> optionalClasses = classService.getAllClass().stream().filter(c -> Objects.equals(c.getId(), child.getChildInformationId().toString())).findFirst();
//            ClassDTO assignedClass = classes.stream().filter()
                return optionalClasses.isPresent() ? ResponseEntity.ok(optionalClasses.get()) : ResponseEntity.ok(null);
            }else return ResponseEntity.ok(null);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Error");
        }
    }


    @PostMapping("/booknow")
    public ResponseEntity<?> bookingService(@RequestBody @Valid BookingRequest request) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        try {
            bookingListService.save(request, username);
            return ResponseEntity.ok().body("Booking Recorded");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
