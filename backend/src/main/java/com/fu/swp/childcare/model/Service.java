package com.fu.swp.childcare.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Service {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String serviceTitle;
    private Date createdDate;
    private Date updatedDate;
    private String servicePrice;
    private String serviceDetail;
    private int rateStar;

    @ManyToOne
    @JoinColumn(name = "category_id")
    Category category;



}
