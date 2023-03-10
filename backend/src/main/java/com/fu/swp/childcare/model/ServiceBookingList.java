package com.fu.swp.childcare.model;

import com.fu.swp.childcare.payload.response.BookingServiceListResponse;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.awt.print.Book;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public class ServiceBookingList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    User customer;

    @ManyToOne
    @JoinColumn(name = "service_id_id")
    Service serviceId;

    @ManyToOne
    @JoinColumn(name = "child_id_id")
    ChildInformation childID;

    @ManyToOne
    @JoinColumn(name = "mod_id")
    User mod;

    String status = "Pending";

    LocalDate createDate;

    public BookingServiceListResponse toBookingServiceListResponse(){
        return new BookingServiceListResponse(this.id.toString(),this.serviceId.getServiceTitle(), this.customer.getUsername(),this.childID.getLastName() , this.createDate,this.status);
    }
}
