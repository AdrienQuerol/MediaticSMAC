package dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import modele.adherent.Adherent;
import modele.adherent.Emprunt;

public class AdherentDAO extends DAO<Adherent> {
	public AdherentDAO() {
		super(Adherent.class);
	}
	
	public static List<Adherent> rechercheAdherents(String debutIdent, String partieNom, String colonneTri, Classement ordreTri) {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		TypedQuery<Adherent> requete = em.createQuery(
				"SELECT a FROM Adherent a\n" +
				"WHERE CAST(a.ID AS string)\n" +
					"LIKE CONCAT(:debutIdent, '%') AND\n" +
					"a.nom LIKE CONCAT('%', CONCAT(:partieNom, '%'))\n" +
				"ORDER BY :colonneTri " + (ordreTri != null ? ordreTri.toSQLString() : "ASC"),
				Adherent.class);
		requete.setParameter("debutIdent", debutIdent);
		requete.setParameter("partieNom", partieNom);
		requete.setParameter("colonneTri", colonneTri != null ? colonneTri : "nom, prenom");
		List<Adherent> resultat = requete.getResultList();
		em.close();
		return resultat;
	}
	
	public static List<Emprunt> empruntsEnCours(Adherent adh) {
		EntityManager em = PersistenceManagerFactory.instance().createEntityManager();
		TypedQuery<Emprunt> requete = em.createQuery(
				"SELECT e FROM Emprunt e\n" +
				"WHERE\n" +
					"e.adherent = :adherent AND\n" +
					"e.dateretour IS NULL",
				Emprunt.class);
		requete.setParameter("adherent", adh);
		List<Emprunt> resultat = requete.getResultList();
		em.close();
		return resultat;
	}
}
