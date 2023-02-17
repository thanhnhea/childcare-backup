package com.fu.swp.childcare.services;

import com.fu.swp.childcare.controller.mapping.UserDto;
import com.fu.swp.childcare.model.User;

import java.util.List;
public interface UserProfileService {
    public User getUserById(Long id);

    public List<UserDto> getAllUser();
    public List<UserDto> getAllUser(int pageIndex, int pageSize);

}
