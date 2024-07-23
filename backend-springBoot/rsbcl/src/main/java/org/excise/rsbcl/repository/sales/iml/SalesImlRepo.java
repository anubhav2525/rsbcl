package org.excise.rsbcl.repository.sales.iml;

import org.bson.types.ObjectId;
import org.excise.rsbcl.model.sales.iml.SalesIml;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalesImlRepo extends MongoRepository<SalesIml, ObjectId> {
    List<SalesIml> findByYearAndCategory(int year, String category);
}
