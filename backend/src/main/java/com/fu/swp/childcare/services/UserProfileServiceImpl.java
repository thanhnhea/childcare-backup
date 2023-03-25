package com.fu.swp.childcare.services;

import com.fu.swp.childcare.bucket.BucketName;
import com.fu.swp.childcare.controller.mapping.UserDto;
import com.fu.swp.childcare.files.FileStore;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.EditProfileRequest;
import com.fu.swp.childcare.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserProfileServiceImpl implements UserProfileService {

    private final UserRepository userRepository;

    private final FileStore fileStore;

    @Autowired
    public UserProfileServiceImpl(UserRepository userRepository, FileStore fileStore) {
        this.userRepository = userRepository;
        this.fileStore = fileStore;
    }

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

    @Override
    public UserDto getUserInfo(String username) {
        return userRepository.findByUsername(username).orElseThrow(()->new IllegalStateException("User not found")).toUserDto();
    }

    private Map<String, String> extractMetadata(MultipartFile file) {
        Map<String,String> metaData = new HashMap<>( );
        metaData.put("Content-Type", file.getContentType()) ;
        metaData.put("Content-Length" , String.valueOf(file.getSize())) ;
        return metaData;
    }

    @Override
    public User updateUser(EditProfileRequest userDto) {
        try {
            Optional<User> optionalUser = userRepository.findByUsername(userDto.getUsername());
            if (optionalUser.isPresent()) {
                User user = optionalUser.get();
                user.setFirstName(userDto.getFirstName());
                user.setLastName(userDto.getLastName());
                user.setPhone(userDto.getPhone());
                user.setEmail(userDto.getEmail());
                user.setAddress(userDto.getAddress());
                if (userDto.getImage() != null) {
                    Map<String, String> metaData = extractMetadata(userDto.getImage());
                    //set file name and path in s3 bucket
                    String path = String.format("%s/%s" , BucketName.PROFILE_IMAGE.getBucketName() , user.getId());
                    String fileName = String.format("%s-%s" , userDto.getImage().getOriginalFilename() , UUID.randomUUID());
                    try {
                        fileStore.save(path,fileName, Optional.of(metaData),userDto.getImage().getInputStream());
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    user.setPfpImgLink(fileName);
                }
                return userRepository.save(user);
            } else {
                throw new Exception("User not found");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public byte[] downloadPfpImage(User u){
        String fullPath = String.format("/%s/%s",BucketName.PROFILE_IMAGE.getBucketName() , u.getId());
        if(null != u.getPfpImgLink()){
            return fileStore.download(fullPath, u.getPfpImgLink());
        }else{
            return new byte[0];
        }
    }
}
