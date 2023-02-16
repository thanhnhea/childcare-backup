package com.fu.swp.childcare.payload;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestChangePassword {
    private String newPassword;
    private String oldPassword;

}
