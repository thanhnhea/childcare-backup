package com.fu.swp.childcare.services;

import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return null;
    }
    public List<User> getAllUser(){
        List<User> userList = userRepository.findAll();
        return userList;

    }
    public User getUserDetail(String uname){
        User u = userRepository.findByUsername(uname);
        return u;
    }
}
