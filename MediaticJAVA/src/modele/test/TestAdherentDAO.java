package modele.test;

import java.time.LocalDate;
import java.util.List;

import dao.AdherentDAO;
import modele.adherent.Adherent;

public class TestAdherentDAO {
	public static void main (String[] args) {
		AdherentDAO adhBD = new AdherentDAO();

		Adherent pDupont = new Adherent("Dupont", "Paul", LocalDate.of(2000,  3,  15));
		Adherent jMartin = new Adherent("Martin", "Jacques", LocalDate.of(1987, 10, 3));
		adhBD.save(pDupont);
		adhBD.save(jMartin);
		
		List<Adherent> adhs = AdherentDAO.rechercheAdherents(pDupont.getID().toString(), "upo", null, null);
		for (Adherent a : adhs) {
			System.out.println(a);
		}
	}
}
