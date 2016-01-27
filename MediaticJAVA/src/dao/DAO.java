package dao;

import javax.persistence.EntityManager;

public class DAO<T> {
	
	DAO(Class<T> classe) {
		this.classe = classe;
	}

	public void save(T o) {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		em.getTransaction().begin();
		em.persist(o);
		em.getTransaction().commit();
		em.close();
	}
	
	public T get(Long id) {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		T obj = em.find(this.classe, id);
		em.close();
		return obj;
	}
	
	public void update(T obj) {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		em.getTransaction().begin();
		em.merge(obj);
		em.getTransaction().commit();
		em.close();
	}
	
	private Class<T> classe;
}