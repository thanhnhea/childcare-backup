//package com.fu.swp.childcare.utils;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//public class PasswordEncoder {
//
//    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//
//    public static String encode(String password) {
//        return encoder.encode(password);
//    }
//
//    public static boolean matches(CharSequence rawPassword, String encodedPassword) {
//        return encoder.matches(rawPassword, encodedPassword);
//    }
//}
