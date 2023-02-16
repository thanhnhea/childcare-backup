package com.fu.swp.childcare.services;

import com.fu.swp.childcare.payload.EmailDetails;

import java.util.Map;

public interface EmailService {

    public void sendSimpleMail(String mail, Map<String, Object> model);
}
