package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.model.ServiceBookingList;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.BookingRequest;
import com.fu.swp.childcare.payload.response.BookingServiceListResponse;
import com.fu.swp.childcare.repositories.ServiceBookingRepository;
import com.fu.swp.childcare.repositories.ServiceRepository;
import com.fu.swp.childcare.repositories.UserRepository;
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
    ServiceRepository serviceRepository ;

    @Autowired
    ChildrenService childrenService;

    @Autowired
    UserService userService;

    public List<ServiceBookingList> getAll(){
        return serviceBookingRepository.findAll();
    }

    public void save(BookingRequest bookingRequest , String username){
        User u = userService.getUserDetail(username);
        ServiceBookingList bookingList = new ServiceBookingList();
        com.fu.swp.childcare.model.Service s = serviceRepository.findById(Long.valueOf(bookingRequest.getId())).orElseThrow();
        bookingList.setServiceId(s);
        ChildInformation childInformation = childrenService.getChildById(bookingRequest.getChildId());
        bookingList.setChildID(childInformation);
        bookingList.setCustomer(u);
        bookingList.setCreateDate(LocalDate.now());
        serviceBookingRepository.save(bookingList);
    }

    public ServiceBookingList getServiceBookingList(String Id){
        return serviceBookingRepository.findById(Id).orElseThrow();
    }

    public void save(ServiceBookingList serviceBookingList) {
        serviceBookingRepository.save(serviceBookingList);
    }
}
