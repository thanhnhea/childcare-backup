package com.fu.swp.childcare.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @GetMapping("/")
    public String testConnection(){
        return "hello world 12 2 33 4 ";
    }
}
