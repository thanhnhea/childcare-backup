package com.fu.swp.childcare.controller.mapping;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class BlogDTO {
     private String id;
     private String title;
     private LocalDate createdDate;
     private String username;
     private String blogContent;
}


