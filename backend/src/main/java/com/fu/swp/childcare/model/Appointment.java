package com.fu.swp.childcare.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "appointments")
public class Appointment {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    String parentFirstName;
    String parentLastname;
    String contactNumber;
    String email;
    String address;
    String notes;

    @OneToMany
    Set<ChildInformation> childInformation = new HashSet<>();

    @OneToMany
    Set<Service> service = new HashSet<>();
}
