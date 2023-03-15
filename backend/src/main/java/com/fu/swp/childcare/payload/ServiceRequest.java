package com.fu.swp.childcare.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ServiceRequest {
    private String title;
    private String price;
    private String details;
    private String category;

    @Override
    public String toString() {
        return "ServiceRequest{" +
                "title='" + title + '\'' +
                ", price='" + price + '\'' +
                ", details='" + details + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}
