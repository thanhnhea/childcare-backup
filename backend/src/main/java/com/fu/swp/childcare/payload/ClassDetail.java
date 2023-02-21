package com.fu.swp.childcare.payload;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClassDetail {
    @NotNull
    @Size(min = 2, max = 20)
    private String className;

    private LocalDate startDate;
    private LocalDate endDate;

    private String description;
}
