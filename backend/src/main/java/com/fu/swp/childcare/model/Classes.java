package com.fu.swp.childcare.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "classes")
public class Classes {
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "id" , unique = true )
    private Long id;

    @Column(unique = true)
    String className;
    LocalDate createdDate;
    LocalDate updatedDate;
    LocalDate startDate;
    LocalDate endDate;
    String description;
    @OneToOne
    User createdPerson;

    @OneToMany
    @JoinColumn(name = "child_information_id")
    Set<ChildInformation> childInformation;
}
