package com.fu.swp.childcare.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
public class Classes {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    String className;
    Date createdDate;
    Date updatedDate;
    Date startDate;
    Date endDate;
    String classDetails;

    @OneToMany
    Set<ChildInformation> childInformation = new HashSet<>();

    @ManyToOne
    User user;

}
