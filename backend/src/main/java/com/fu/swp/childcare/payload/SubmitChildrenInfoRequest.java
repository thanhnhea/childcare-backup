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
    String note;
    String interest;
    String needs;
    String notes;
}
