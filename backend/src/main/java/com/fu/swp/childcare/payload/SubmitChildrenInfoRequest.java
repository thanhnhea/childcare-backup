package com.fu.swp.childcare.payload;


import com.fu.swp.childcare.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubmitChildrenInfoRequest {
    String firstName;
    String lastName;
    String dob;
    boolean gender;
    String interest;
    String needs;
    String note;

    @Override
    public String toString() {
        return "SubmitChildrenInfoRequest{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dob='" + dob + '\'' +
                ", gender=" + gender +
                ", note='" + note + '\'' +
                ", interest='" + interest + '\'' +
                ", needs='" + needs + '\'' +
                '}';
    }
}
