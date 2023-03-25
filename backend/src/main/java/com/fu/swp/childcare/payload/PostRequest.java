package com.fu.swp.childcare.payload;

import com.fu.swp.childcare.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostRequest {
    private String id;
    private String title;
    private String content;
    private MultipartFile images;
    private User user;
}
