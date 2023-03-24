package com.fu.swp.childcare.payload;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Getter
@Setter
public class EditProfileRequest {
    private String id;
    private String firstName;
    private String lastName;
    private LocalDate dob;
    private String address;
    MultipartFile image;
}
