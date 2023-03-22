package com.fu.swp.childcare.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostRequest {
    private String id;
    private String title;
    private String content;
    private MultipartFile file;
}
