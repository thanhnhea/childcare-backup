package com.fu.swp.childcare.repositories;

import com.fu.swp.childcare.model.Classes;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRepository extends CrudRepository<Classes,Long> {

}
