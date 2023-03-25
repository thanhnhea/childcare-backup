package com.fu.swp.childcare.config;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AmazonConfig {

    @Bean
    public AmazonS3 s3(){
        AWSCredentialsProvider awsCredentialsProvider = new ProfileCredentialsProvider("default");

        return AmazonS3ClientBuilder
                .standard()
                .withCredentials(awsCredentialsProvider)
                .build();
    }

}
