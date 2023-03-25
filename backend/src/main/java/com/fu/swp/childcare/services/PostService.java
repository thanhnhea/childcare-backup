package com.fu.swp.childcare.services;

import com.fu.swp.childcare.bucket.BucketName;
import com.fu.swp.childcare.controller.mapping.PostDTO;
import com.fu.swp.childcare.exception.ResourceNotFoundException;
import com.fu.swp.childcare.files.FileStore;
import com.fu.swp.childcare.model.Post;
import com.fu.swp.childcare.model.User;
import com.fu.swp.childcare.payload.PostRequest;
import com.fu.swp.childcare.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class PostService {


    private final PostRepository postRepository;

    private final FileStore fileStore;

    @Autowired
    public PostService(PostRepository postRepository, FileStore fileStore) {
        this.postRepository = postRepository;
        this.fileStore = fileStore;
    }

    /**
     *
     * check image not empty
     * if file is an image
     * grab metadata from file if any
     * store image in s3 and update database with s3 link
     *
     * @param title
     * @param content
     *
     */
    public void savePost(PostRequest postRequest) {
        Post post = new Post();
        if(postRequest.getTitle() != null){
            post.setTitle(postRequest.getTitle());
        }
        if(postRequest.getContent() != null){
            post.setContent(postRequest.getContent());
        }
        post.setCreatedDate(LocalDateTime.now());
        post.setUser(postRequest.getUser());

        if(postRequest.getImages() != null){
            Map<String, String> metaData = extractMetadata(postRequest.getImages());
            String path = String.format("%s/%s" , BucketName.PROFILE_IMAGE.getBucketName() , postRequest.getUser().getUsername());
            String fileName = String.format("%s-%s" , postRequest.getImages().getOriginalFilename() , UUID.randomUUID());
            try {
                fileStore.save(path,fileName,Optional.of(metaData),postRequest.getImages().getInputStream());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            post.setImageLink(fileName);
        }
//        isFileEmpty(!Arrays.asList(IMAGE_JPEG.get, IMAGE_PNG.getSubtype(), IMAGE_GIF.getSubtype()).contains(file.getContentType()), "File must be an image " + file.getContentType());
        postRepository.save(post);
    }

    public void deletePost(String id){
        postRepository.deleteById(Long.valueOf(id));
    }

    private Map<String, String> extractMetadata(MultipartFile file) {
        Map<String,String> metaData = new HashMap<>( );
        metaData.put("Content-Type", file.getContentType()) ;
        metaData.put("Content-Length" , String.valueOf(file.getSize())) ;
        return metaData;
    }

    private void isFileEmpty(boolean file, String Cannot_upload_empty_file_) {
        if(file){
            throw new IllegalStateException(Cannot_upload_empty_file_);
        }
    }

    public List<PostDTO> getALlPost(){
        List<Post> posts = postRepository.findAll();
        return posts.stream().map(Post::toDTO).collect(Collectors.toList());
    }

    public Post findById(String id){
        return postRepository.findById(Long.valueOf(id)).orElseThrow(()-> new ResourceNotFoundException("Post Not Found"));
    }

    public PostDTO getPostDetail (String id) {
        Post post =  postRepository.findById(Long.valueOf(id)).orElseThrow(() -> new ResourceNotFoundException("Post not found"));
        return post.toDTO();
    }

    public Post editPost(PostRequest request){
        Post p = findById(request.getId());
        return postRepository.save(p);
    }

    public byte[] downloadPostImage(Post post){
        User u = post.getUser();
        String fullPath = String.format("/%s/%s",BucketName.PROFILE_IMAGE.getBucketName() , u.getUsername());
        if(null != post.getImageLink()){
            return fileStore.download(fullPath, post.getImageLink());
        }else{
            return new byte[0];
        }
    }

    public List<Post> getAllPosts(int page, int size) {
        Pageable paging = PageRequest.of(page, size, Sort.by("createdDate").descending());
        Page<Post> pageResult = postRepository.findAll(paging);
        return pageResult.getContent();
    }
}
