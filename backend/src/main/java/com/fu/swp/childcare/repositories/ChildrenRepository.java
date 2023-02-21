package com.fu.swp.childcare.repositories;

import com.fu.swp.childcare.model.ChildInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChildrenRepository extends JpaRepository<ChildInformation,Long> {
    @Query(value = "SELECT * FROM `childinfo` c WHERE c.user_id = ?1",
    nativeQuery = true)
    List<ChildInformation> loadChildrenFromUserId(long id);
}
