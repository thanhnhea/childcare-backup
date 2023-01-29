package com.fu.swp.childcare.exception;

import org.springframework.http.HttpStatus;

public class ErrorResponse {
    private final String msg;
    private final HttpStatus status ;

    public ErrorResponse(String msg, HttpStatus status) {
        this.msg = msg;
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
