package com.fu.swp.childcare.controller.mapping;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class ClassDTO {
    private String id;
    private String name;
    private LocalDate createDate;
    private LocalDate startDate;
    private String description;
    private String ageRange;
    private String service;
    private String createdAccount;



}
