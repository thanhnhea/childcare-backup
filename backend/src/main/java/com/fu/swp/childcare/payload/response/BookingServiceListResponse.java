package com.fu.swp.childcare.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@AllArgsConstructor
@Getter
public class BookingServiceListResponse {
    private String id;
    private String serviceName;
    private String accountName;
    private String childName;
    private LocalDate date;
    private String status;
}
