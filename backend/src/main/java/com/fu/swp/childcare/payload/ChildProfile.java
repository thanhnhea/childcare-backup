package com.fu.swp.childcare.payload;

import jakarta.validation.Valid;
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
public class ChildProfile {
    @NotNull
    @Size(min = 2, max = 10)
    private String firstName;
    @NotNull
    @Size(min = 2, max = 10)
    private String lastName;
    @NotNull
    private LocalDate dob;
    @NotNull
    private boolean gender;
    private String interest;
    private String needs;
    private String note;

}
