package com.fu.swp.childcare.model;

import com.fu.swp.childcare.controller.mapping.ServiceDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

import java.time.LocalDate;
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
    private LocalDate createdDate;
    private LocalDate updatedDate;
    private String servicePrice;
    private String serviceDetail;

    @ManyToOne
    @JoinColumn(name = "category_id")
    Category category;

    public ServiceDto toServiceDto() {
        return new ServiceDto(
                this.id,
                this.serviceTitle,
                this.createdDate,
                this.updatedDate,
                this.servicePrice,
                this.serviceDetail,
                this.category.getName()
        );
    }
}
