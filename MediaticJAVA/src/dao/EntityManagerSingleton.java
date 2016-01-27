package dao;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class EntityManagerSingleton {

	private static EntityManagerFactory entityManagerFactory;

	public static EntityManagerFactory instance() {
		if (entityManagerFactory == null)
			entityManagerFactory = Persistence.createEntityManagerFactory("unit");
		return entityManagerFactory;
	}

}
