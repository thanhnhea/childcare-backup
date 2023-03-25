package com.fu.swp.childcare.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class EditProfileRequest {
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String address;
    MultipartFile image;

    public EditProfileRequest(String username) {
        this.username = username;
    }
}
