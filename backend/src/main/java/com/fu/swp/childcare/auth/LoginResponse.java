package com.fu.swp.childcare.auth;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.List;

public class LoginResponse {
    private final String jwt;
    private final Long id;
    private final String username;
    private final List<String> authorities;

    public LoginResponse(String jwt, Long id, String username, List<String> authorities) {
        this.jwt = jwt;
        this.id = id;
        this.username = username;
        this.authorities = authorities;
    }

}
