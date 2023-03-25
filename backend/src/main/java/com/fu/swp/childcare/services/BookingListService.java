package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.model.ServiceBookingList;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.BookingRequest;
import com.fu.swp.childcare.payload.response.BookingServiceListResponse;
import com.fu.swp.childcare.repositories.ServiceBookingRepository;
import com.fu.swp.childcare.repositories.ServiceRepository;
import com.fu.swp.childcare.repositories.UserRepository;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookingListService {

    @Autowired
    ServiceBookingRepository serviceBookingRepository;

    @Autowired
    ServiceRepository serviceRepository;

    @Autowired
    ChildrenService childrenService;

    @Autowired
    UserService userService;

    @Autowired
    MailService emailService;

    public List<ServiceBookingList> getAll() {
        return serviceBookingRepository.findAll();
    }

    public void save(BookingRequest bookingRequest, String username) {
        User u = userService.getUserDetail(username);
        ServiceBookingList bookingList = new ServiceBookingList();
        com.fu.swp.childcare.model.Service s = serviceRepository.findById(Long.valueOf(bookingRequest.getId())).orElseThrow();
        bookingList.setServiceId(s);
        ChildInformation childInformation = childrenService.getChildById(bookingRequest.getChildId());
        Boolean isPaid = bookingRequest.getIsPaid();
        String status = isPaid ? ServiceBookingList.APPROVED : ServiceBookingList.PENDING;
        bookingList.setChildID(childInformation);
        bookingList.setStatus(status);
        bookingList.setCustomer(u);
        bookingList.setCreateDate(LocalDate.now());
        System.out.println(bookingList);
        serviceBookingRepository.save(bookingList);
        try {
            if (isPaid) {
                String emailMessage =
                        "Service " + s.getServiceTitle() +
                                " has booked successful\n" +
                                " at " + bookingList.getCreateDate() + "\n" +
                                " for child " + childInformation.getFirstName() + " " + childInformation.getLastName() + "\n" +
                                " with service price is " + s.getServicePrice() + "\n" +
                                " status :" + status;
                emailService.sendHtmlMessage(
                        u.getEmail(),
                        "Service booking successfully!",emailMessage
                );
                System.out.println(emailMessage);
            }
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    public ServiceBookingList getServiceBookingList(String Id) {
        return serviceBookingRepository.findById(Id).orElseThrow();
    }

    public void save(ServiceBookingList serviceBookingList) {
        serviceBookingRepository.save(serviceBookingList);
    }

    public List<ServiceBookingList> getBookedService(String id){
        return serviceBookingRepository.findByCustomerId(Long.valueOf(id));
    }
}
