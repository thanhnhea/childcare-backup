package com.fu.swp.childcare.repositories;

import com.fu.swp.childcare.model.ServiceBookingList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ServiceBookingRepository extends JpaRepository<ServiceBookingList,Long> {

    Optional<ServiceBookingList> findById(String id);
}
