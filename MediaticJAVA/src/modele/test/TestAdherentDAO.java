package modele.test;

import java.time.LocalDate;
import java.util.List;
import java.util.TreeSet;

import dao.AdherentDAO;
import dao.Classement;
import dao.EmpruntDAO;
import dao.MediaDAO;
import modele.adherent.Adherent;
import modele.adherent.Emprunt;
import modele.media.CD;
import modele.media.DVD;
import modele.media.Livre;
import modele.media.Media;

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

		MediaDAO mediaBD = new MediaDAO();
		Media titre       = new CD("titre","bobobobo");
		Media fleursDuMal = new Livre("Les fleurs du mal","baudelaire");
		Media batman      = new DVD("Batman","Joker");
		Media starWars    = new DVD("Star Wars","Lucas");
		Media inExtremis  = new CD("In extremis","Cabrel");

		Emprunt e1 = new Emprunt(pDupont,  titre,       LocalDate.of(2016, 01, 14));		
		Emprunt e2 = new Emprunt(pDupont,  fleursDuMal, LocalDate.now());
		Emprunt e3 = new Emprunt(cPeladan, titre,       LocalDate.now());
		Emprunt e4 = new Emprunt(jMartin,  titre,       LocalDate.now());
		Emprunt e5 = new Emprunt(pDupont,  batman,      LocalDate.of(2016,  01,  8));
		
		mediaBD.save(titre);
		mediaBD.save(fleursDuMal);
		mediaBD.save(batman);
		mediaBD.save(starWars);
		mediaBD.save(inExtremis);
		
		EmpruntDAO empruntBD = new EmpruntDAO();
		empruntBD.save(e1);
		empruntBD.save(e2);
		empruntBD.save(e3);
		empruntBD.save(e4);
		empruntBD.save(e5);
		
		List<Emprunt> empruntsDupont = AdherentDAO.empruntsEnCours(pDupont);
		if (empruntsDupont.size() != 3)
			throw new RuntimeException("Nombre de médias retournés incorrect: "  + empruntsDupont.size());
		TreeSet<Long> bonsIDEmpruntsDupont, IDEmpruntsDupont;
		bonsIDEmpruntsDupont = new TreeSet<Long>();
		bonsIDEmpruntsDupont.add(e1.getID());
		bonsIDEmpruntsDupont.add(e2.getID());
		bonsIDEmpruntsDupont.add(e5.getID());
		IDEmpruntsDupont = new TreeSet<Long>();
		if (!bonsIDEmpruntsDupont.equals(IDEmpruntsDupont))
			throw new RuntimeException("Liste d'emprunts renvoyés incorrecte");

		
	}
}
