package com.fu.swp.childcare.controller.mapping;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Setter
@Getter
public class ChildrenInfoDto {
    String firstName;
    String lastName;
    Date dob;
    boolean gender;
    String interest;
    String needs;
    String note;
    private UserDto user;

    public ChildrenInfoDto() {
    }

    public ChildrenInfoDto(
            String firstName,
            String lastName,
            Date dob,
            boolean gender,
            String interest,
            String needs,
            String note,
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
    }
}
