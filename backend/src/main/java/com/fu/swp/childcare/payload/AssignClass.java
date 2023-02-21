package com.fu.swp.childcare.payload;

import com.fu.swp.childcare.model.ChildInformation;
import com.fu.swp.childcare.model.Classes;
import com.fu.swp.childcare.model.User;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AssignClass {
    @NotNull
    private String childId;
    @NotNull
    private String classId;
}
