package com.fu.swp.childcare.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class ChildRecord {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    Date createdDate ;

    Date updatedDate;

    String recordDetails;

    String notes;

    @OneToOne
    @JoinColumn(name = "user_id")
    User user;

}
