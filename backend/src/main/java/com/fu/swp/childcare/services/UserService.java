package com.fu.swp.childcare.services;

import com.fu.swp.childcare.controller.mapping.UserDto;
import com.fu.swp.childcare.model.PasswordResetToken;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.repositories.PasswordResetTokenRepository;
import com.fu.swp.childcare.repositories.UserRepository;
import com.fu.swp.childcare.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;


    @Autowired
    private PasswordResetTokenRepository passwordTokenRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username)) ;
        return UserDetailsImpl.build(user);
    }
    public List<User> getAllUser(){
        List<User> userList = userRepository.findAll();
        return userList;
    }

    public User getUserDetail(String uname){
        User u = userRepository.findByUsername(uname)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + uname)) ;
        return u;
    }


    String validatePasswordResetToken(long id, String token){
        final PasswordResetToken passToken = passwordTokenRepository.findByToken(token);
        if ((passToken == null) || (passToken.getUser().getId() != id)) {
            return "invalidToken";
        }

        final Calendar cal = Calendar.getInstance();
        if ((passToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0) {
            return "expired";
        }
        return null;
    }

    public Boolean isUserEmailExist(String email){
        return  userRepository.existsByEmail(email);
    }
}
