package com.fu.swp.childcare.controller.mapping;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Setter
@Getter
public class ChildrenInfoDto {
    String id;
    String firstName;
    String lastName;
    LocalDate dob;
    String gender;
    String interest;
    String needs;
    String note;
    private UserDto user;
    private String status;

    public ChildrenInfoDto() {
    }

    public ChildrenInfoDto(
            String firstName,
            String lastName,
            LocalDate dob,
            boolean gender,
            String interest,
            String needs,
            String note,
            boolean status,
            UserDto user
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.gender = String.valueOf(gender);
        this.interest = interest;
        this.needs = needs;
        this.note = note;
        this.user = user;
        if(!status){
            this.status = "UnAssigned";
        }else{
            this.status = "Assigned";
        }

    }

    public ChildrenInfoDto(
            String id,
            String firstName,
            String lastName,
            LocalDate dob,
            boolean gender,
            String interest,
            String needs,
            String note,
            boolean status,
            UserDto user
    )
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        if(!gender){
            this.gender = "Boy";
        }else{
            this.gender = "Girl";
        }
        this.interest = interest;
        this.needs = needs;
        this.note = note;
        this.user = user;
        if(!status){
            this.status = "UnAssigned" ;
        }else{
            this.status = "Assigned" ;
        }
    }
}
