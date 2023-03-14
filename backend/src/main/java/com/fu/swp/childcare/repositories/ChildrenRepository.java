package com.fu.swp.childcare.repositories;

import com.fu.swp.childcare.model.ChildInformation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChildrenRepository extends JpaRepository<ChildInformation, Long> {
    @Query(value = "SELECT * FROM `childinfo` c WHERE c.user_id = ?1",
            nativeQuery = true)
    Page<ChildInformation> loadChildrenFromUserId(long id, Pageable pageable);

    @Query(value = "SELECT * FROM childinfo WHERE child_information_id is null",
            nativeQuery = true)
    Page<ChildInformation> loadUnassignedChildren(Pageable pageable);

    @Query(value = "SELECT * FROM childinfo WHERE child_information_id is null",
            nativeQuery = true)
    List<ChildInformation> loadUnassignedChildren();

    @Query(value = "SELECT * FROM childinfo WHERE child_information_id is not null",
            nativeQuery = true)
    List<ChildInformation> loadAssignedChildren();

    @Query(value = "SELECT * FROM childinfo WHERE child_information_id = :id",
            nativeQuery = true)
    List<ChildInformation> loadChildrenFromClass(@Param("id") Long id);


}
