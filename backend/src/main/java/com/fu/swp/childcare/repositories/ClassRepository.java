package com.fu.swp.childcare.repositories;

import com.fu.swp.childcare.model.Classes;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClassRepository extends CrudRepository<Classes,Long> {

    Optional<Classes> findById(String id) ;

}
