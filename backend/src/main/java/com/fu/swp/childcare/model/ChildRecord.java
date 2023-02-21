package com.fu.swp.childcare.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "childrecord")
public class ChildRecord {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    Date createdDate ;

    Date updatedDate;

    String recordDetails;

    String notes;

    @ManyToOne
    User user;
}
