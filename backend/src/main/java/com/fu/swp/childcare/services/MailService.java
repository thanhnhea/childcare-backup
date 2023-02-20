package com.fu.swp.childcare.services;

import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public interface MailService {
    void sendHtmlMessage(String to, String subject, String content) throws MessagingException;


    public void sendSimpleMail(String mail, Map<String, Object> model) throws MessagingException;
}
