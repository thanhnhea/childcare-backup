package com.fu.swp.childcare.services;

import com.fu.swp.childcare.controller.mapping.UserDto;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.EditProfileRequest;

import java.util.List;
public interface UserProfileService {
    public User getUserById(Long id);

    public List<UserDto> getAllUser();
    public List<UserDto> getAllUser(int pageIndex, int pageSize);

    UserDto getUserInfo(String username);

    public User loadUserByUsername(String username);

    public void save(User user);

    User edit(User u , EditProfileRequest request);
}
