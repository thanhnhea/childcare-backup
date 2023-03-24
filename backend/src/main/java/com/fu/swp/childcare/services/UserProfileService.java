package com.fu.swp.childcare.services;

import com.fu.swp.childcare.controller.mapping.UserDto;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.EditProfileRequest;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
public interface UserProfileService {
    User getUserById(Long id);

    List<UserDto> getAllUser();
    List<UserDto> getAllUser(int pageIndex, int pageSize);

    UserDto getUserInfo(String username);

    User loadUserByUsername(String username);

    void save(User user);

    User updateUser(EditProfileRequest user);

    byte[] downloadPfpImage(User u);
}
