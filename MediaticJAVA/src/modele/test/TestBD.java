package modele.test;

import javax.persistence.EntityManagerFactory;

import dao.EntityManagerSingleton;

public class TestBD {

	public static void main(String[] args) {
		EntityManagerFactory emf = EntityManagerSingleton.instance();

	}

}
