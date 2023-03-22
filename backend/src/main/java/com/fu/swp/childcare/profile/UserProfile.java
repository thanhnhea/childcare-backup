package com.fu.swp.childcare.profile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@AllArgsConstructor
@Getter
@Setter
public class UserProfile {

    private String id;
    private String username;
    private String userProfileImageLink; //s3 key

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProfile that = (UserProfile) o;
        return Objects.equals(id, that.id)
                && Objects.equals(username, that.username)
                && Objects.equals(userProfileImageLink , that.userProfileImageLink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, userProfileImageLink);
    }
}
