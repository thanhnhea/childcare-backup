package com.fu.swp.childcare.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostRequest {
    private String id;
    private String title;
    private String content;
}
