package com.fu.swp.childcare.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fu.swp.childcare.controller.mapping.ClassDTO;
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
    @Column(name = "id", unique = true)
    private Long id;
    @Column(unique = true)
    String className;
    LocalDate createdDate;
    @JsonFormat(pattern = "dd/MM/yyyy")
    LocalDate startDate;
    @JsonFormat(pattern = "dd/MM/yyyy")
    LocalDate endDate;
    @Column(length = 2000)
    String description;
    String ageRange;
    @ManyToOne
    @JoinColumn(name = "service_id")
    Service service;
    @OneToOne
    User createdPerson;
    @OneToMany
    @JoinColumn(name = "child_information_id")
    Set<ChildInformation> childInformation;


    public ClassDTO toClassDTO() {
        return new ClassDTO(
                this.getId().toString(),
                this.className,
                this.createdDate,
                this.startDate,
                this.description,
                this.service.getServiceTitle(),
                this.ageRange,
                this.getCreatedPerson().getUsername());
    }
    
    @Override
    public String toString() {
        return "Classes{" +
                "id=" + id +
                ", className='" + className + '\'' +
                ", createdDate=" + createdDate +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", description='" + description + '\'' +
                ", ageRange='" + ageRange + '\'' +
                ", service=" + service +
                ", createdPerson=" + createdPerson +
                ", childInformation=" + childInformation +
                '}';
    }
}
