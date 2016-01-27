package dao;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

public class DAO<T> {
	
	DAO(Class<T> classe) {
		this.classe = classe;
	}

	void save(T o) {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		em.getTransaction().begin();
		em.persist(o);
		em.getTransaction().commit();
		em.close();
	}
	
	T get(Long id) {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		T obj = em.find(this.classe, id);
		em.close();
		return obj;
	}
	
	void update(T obj) {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		em.getTransaction().begin();
		em.merge(obj);
		em.getTransaction().commit();
		em.close();
	}
	
	private Class<T> classe;
}