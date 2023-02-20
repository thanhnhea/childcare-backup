package com.fu.swp.childcare.model;

import jakarta.persistence.*;

import java.util.Calendar;
import java.util.Date;


@Entity
public class PasswordResetToken {
    private static final int EXPIRATION = 15;

    public PasswordResetToken() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String token;

    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;

    private Date expiryDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }
    public void setExpiryDate() {
        Calendar now = Calendar.getInstance();
        now.add(Calendar.MINUTE, EXPIRATION);
        this.expiryDate = now.getTime();
    }

    public boolean isExpired() {
        return new Date().after(this.expiryDate);
    }
    public PasswordResetToken(String token, User user) {
        this.token = token;
        this.user = user;
    }
}
