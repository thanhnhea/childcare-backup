package com.fu.swp.childcare.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentRequest {
    private String postId;
    private String content;
}
