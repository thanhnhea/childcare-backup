package com.fu.swp.childcare.controller.mapping;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Setter
@Getter
public class ChildrenInfoDto {
    String firstName;
    String lastName;
    LocalDate dob;
    boolean gender;
    String interest;
    String needs;
    String note;
    private UserDto user;
    private boolean status = false;

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
        this.gender = gender;
        this.interest = interest;
        this.needs = needs;
        this.note = note;
        this.user = user;
        this.status = status;
    }
}
