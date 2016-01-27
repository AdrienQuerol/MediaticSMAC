package modele.test;

import java.time.LocalDate;
import java.util.List;

import dao.AdherentDAO;
import dao.Classement;
import modele.adherent.Adherent;

public class TestAdherentDAO {
	public static void main (String[] args) {
		AdherentDAO adhBD = new AdherentDAO();

		Adherent pDupont  = new Adherent("Dupont",  "Paul",    LocalDate.of(2000,  3, 15));
		Adherent jMartin  = new Adherent("Martin",  "Jacques", LocalDate.of(1987, 10,  3));
		Adherent cPeladan = new Adherent("Peladan", "Cécile",  LocalDate.of(1992, 12, 03)); 
		Adherent aQuerol  = new Adherent("Querol",  "Adrien",  LocalDate.of(1992, 11, 23)); 
		Adherent mMorin   = new Adherent("Morin",   "Mikael",  LocalDate.of(1992, 01, 15)); 
		Adherent sBekkara = new Adherent("Bekkara", "Salim",   LocalDate.of(1992,  9, 13));

		adhBD.save(pDupont);
		adhBD.save(jMartin);
		adhBD.save(cPeladan);
		adhBD.save(aQuerol);
		adhBD.save(mMorin);
		adhBD.save(sBekkara);
		
		List<Adherent> adhs = AdherentDAO.rechercheAdherents(pDupont.getID().toString(), "upo", null, null);
		if (adhs.size() != 1)
			throw new RuntimeException("Nombre d'adhérents retournés incorrect: " + adhs.size());
		Adherent a = adhs.get(0);
		if (!("Dupont".equals(a.getNom()) && "Paul".equals(a.getPrenom())))
			throw new RuntimeException("Adhérent retourné invalide: " + a.getPrenom() + " " + a.getNom());
		
		adhs = AdherentDAO.rechercheAdherents(null, "elad", "nom", Classement.CROISSANT);
		if (adhs.size() != 1)
			throw new RuntimeException("Nombre d'adhérents retournés incorrect: " + adhs.size());
		a = adhs.get(0);
		if (!("Peladan".equals(a.getNom()) && "Cécile".equals(a.getPrenom())))
			throw new RuntimeException("Adhérent retourné invalide: " + a.getPrenom() + " " + a.getNom());
	}
}
