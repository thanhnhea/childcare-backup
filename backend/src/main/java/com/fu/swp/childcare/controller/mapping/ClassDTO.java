package com.fu.swp.childcare.controller.mapping;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ClassDTO {
    private String id;
    private String name;
    private LocalDate createDate;
    private LocalDate startDate;
    private String description;
    private String ageRange;
    private String service;
    private String createdAccount;

    public ClassDTO() {
    }

    public ClassDTO(String id,
                    String name,
                    LocalDate createDate,
                    LocalDate startDate,
                    String description,
                    String service,
                    String ageRange,
                    String createdAccount) {
        this.id = id;
        this.name = name;
        this.createDate = createDate;
        this.startDate = startDate;
        this.description = description;
        this.service = service;
        this.ageRange = ageRange;
        this.createdAccount = createdAccount;
    }

    @Override
    public String toString() {
        return "ClassDTO{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", createDate=" + createDate +
                ", startDate=" + startDate +
                ", description='" + description + '\'' +
                ", ageRange='" + ageRange + '\'' +
                ", service='" + service + '\'' +
                ", createdAccount='" + createdAccount + '\'' +
                '}';
    }
}
