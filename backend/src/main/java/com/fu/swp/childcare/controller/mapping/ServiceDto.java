package com.fu.swp.childcare.controller.mapping;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class ServiceDto {
    private Long id;
    private String serviceTitle;
    private Date createdDate;
    private Date updatedDate;
    private String servicePrice;
    private String serviceDetail;
    private int rateStar;
    private String category;

    public ServiceDto(
            Long id,
            String serviceTitle,
            Date createdDate,
            Date updatedDate,
            String servicePrice,
            String serviceDetail,
            int rateStar,
            String category) {
        this.id = id;
        this.serviceTitle = serviceTitle;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.servicePrice = servicePrice;
        this.serviceDetail = serviceDetail;
        this.rateStar = rateStar;
        this.category = category;
    }
}
