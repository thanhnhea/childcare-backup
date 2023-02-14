package com.fu.swp.childcare.repositories;

import com.fu.swp.childcare.model.Service;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends CrudRepository<Service, Long> {

}
