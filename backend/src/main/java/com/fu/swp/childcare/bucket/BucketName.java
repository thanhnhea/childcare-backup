package com.fu.swp.childcare.bucket;

import lombok.Getter;

@Getter
public enum BucketName {
    PROFILE_IMAGE("thanhnhea") ;
    private final String bucketName;
    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }
}
