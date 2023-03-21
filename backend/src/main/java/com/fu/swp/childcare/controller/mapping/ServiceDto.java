package com.fu.swp.childcare.controller.mapping;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Setter
@Getter
public class ServiceDto {
    private Long id;
    private String serviceTitle;
    private LocalDate createdDate;
    private LocalDate updatedDate;
    private String servicePrice;
    private String serviceDetail;
    private String category;

    public ServiceDto(
            Long id,
            String serviceTitle,
            LocalDate createdDate,
            LocalDate updatedDate,
            String servicePrice,
            String serviceDetail,
            String category) {
        this.id = id;
        this.serviceTitle = serviceTitle;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.servicePrice = servicePrice;
        this.serviceDetail = serviceDetail;
        this.category = category;
    }

    @Override
    public String toString() {
        return "ServiceDto{" +
                "id=" + id +
                ", serviceTitle='" + serviceTitle + '\'' +
                ", createdDate=" + createdDate +
                ", updatedDate=" + updatedDate +
                ", servicePrice='" + servicePrice + '\'' +
                ", serviceDetail='" + serviceDetail + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}
