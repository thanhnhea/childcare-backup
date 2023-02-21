package com.fu.swp.childcare.services;

import com.fu.swp.childcare.controller.mapping.UserDto;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserProfileServiceImpl implements UserProfileService {


    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUserById(Long id) {
        return userRepository.getReferenceById(id);
    }

    @Override
    public List<UserDto> getAllUser(int pageIndex, int pageSize) {
        Pageable paging = PageRequest.of(pageIndex,pageSize);
        return userRepository.findAll(paging).stream().map(User::toUserDto).collect(Collectors.toList());
    }

    @Override
    public User loadUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public List<UserDto> getAllUser() {
        return userRepository.findAll().stream().map(User::toUserDto).collect(Collectors.toList());
    }



}
