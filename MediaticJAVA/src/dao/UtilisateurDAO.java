package dao;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import modele.adherent.Utilisateur;
import modele.media.Media;

public class UtilisateurDAO extends DAO<Utilisateur> {

	public UtilisateurDAO() {
		super(Utilisateur.class);
	}
	
	
	
	
	public boolean verifConnection(String login, String motDePasse)  {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		em.getTransaction().begin();

		TypedQuery<Utilisateur> tq = em.createQuery(
				"select u from Utilisateur u where u.login=:login and u.motDePasse=:motDePasse", Utilisateur.class);

		tq.setParameter("login", login);
		tq.setParameter("motDePasse", motDePasse);
		
		
		try {
			Utilisateur utils=tq.getSingleResult();
			return true;
		} catch(Exception ex) {
			return false;
		}
	}
	
	
}
