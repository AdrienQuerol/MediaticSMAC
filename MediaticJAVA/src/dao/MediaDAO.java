package dao;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import modele.adherent.Adherent;
import modele.media.Media;

public class MediaDAO extends DAO<Media> {

	public MediaDAO() {
		super(Media.class);
	}

	public List<Media> rechercheMedia(String titre, String auteur, String type) {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		em.getTransaction().begin();

		TypedQuery<Media> tq = em.createQuery(
				"select m from Media m where m.titre LIKE :titre or m.auteur Like :auteur and m.dtype=:type", Media.class);

		tq.setParameter("titre", "%"+ titre+"%");
		tq.setParameter("auteur", "%"+auteur+"%");
		tq.setParameter("type", type);
		return tq.getResultList();
	}

	public List<Adherent> listeAdherents(Media m) {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		em.getTransaction().begin();

		TypedQuery<Adherent> tq = em.createQuery(
				"select a from Emprunt e join e.adherent a "
				+ "join e.media m where e.media.ID=:id ", Adherent.class);
		tq.setParameter("id", m.getID());
		return tq.getResultList();
	}

}
