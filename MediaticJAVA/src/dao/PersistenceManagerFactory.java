package dao;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class PersistenceManagerFactory {

	static EntityManagerFactory entityManagerFactory;
	
	static EntityManagerFactory instance() {
		if (entityManagerFactory == null)
			entityManagerFactory = Persistence.createEntityManagerFactory("unit");
		
		return entityManagerFactory;
	}

}
