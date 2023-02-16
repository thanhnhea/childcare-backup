package com.fu.swp.childcare.services;

import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;

@Service
public interface MailService {
    void sendHtmlMessage(String to, String subject, String content) throws MessagingException;
}
