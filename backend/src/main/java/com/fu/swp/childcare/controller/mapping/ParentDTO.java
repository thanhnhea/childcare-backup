package com.fu.swp.childcare.controller.mapping;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ParentDTO {
    private String firstName;
    private String lastName;

    List<ChildrenInfoDto> listChildren;
}
