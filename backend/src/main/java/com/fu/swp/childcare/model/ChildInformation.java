package com.fu.swp.childcare.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "childinfo")
public class ChildInformation {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    String firstName;
    String lastName;
    Date dob;
    boolean gender;
    String interest;
    String needs;
    String note;
    @ManyToOne
    User user;

    public ChildInformation(
            String firstName,
            String lastName,
            Date dob,
            boolean gender,
            String interest,
            String needs,
            String note,
            User user
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
