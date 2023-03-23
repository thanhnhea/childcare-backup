package com.fu.swp.childcare.controller.mapping;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class CommentDTO {
    private String id ;
    private String content ;
    private LocalDateTime createdDate ;
    private LocalDateTime updatedDate;
    private UserDto userDto;
}
