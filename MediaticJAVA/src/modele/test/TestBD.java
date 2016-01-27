package modele.test;

import java.time.LocalDate;
import java.util.List;

import dao.AdherentDAO;
import dao.EmpruntDAO;
import dao.MediaDAO;
import dao.UtilisateurDAO;
import modele.adherent.Adherent;
import modele.adherent.Emprunt;
import modele.adherent.Utilisateur;
import modele.media.CD;
import modele.media.DVD;
import modele.media.Livre;
import modele.media.Media;

public class TestBD {

	public static void main(String[] args) {
		MediaDAO dao = new MediaDAO();
		Media m = new CD("fleurs","bobobobo");
		Media m1 = new Livre("Les fleurs du mal","baudelaire");
		Media m2 = new DVD("Batman","Joker");
		Media m3 = new DVD("Star Wars","Lucas");
		Media m4 = new CD("In extremis","Cabrel");
		
		dao.save(m);
		dao.save(m1);
		dao.save(m2);
		dao.save(m3);
		dao.save(m4);
		
		List<Media> m21 = dao.rechercheMedia("fleur","bobo","CD");
		for (Media m12 : m21) {
			System.out.println(m12);
		}
		
		
//		Adherent a1=new Adherent("Peladan","Cecile",LocalDate.of(1992,12,03)); 
//		Adherent a2=new Adherent("Querol","Adrien",LocalDate.of(1992,11,23)); 
//		Adherent a3=new Adherent("Morin","Mikael",LocalDate.of(1992,01,15)); 
//		Adherent a4=new Adherent("Bekkara","Salim",LocalDate.of(1992,9,13)); 
//		
//		AdherentDAO daoA = new AdherentDAO();
//		
//		daoA.save(a1);
//		daoA.save(a2);
//		daoA.save(a3);
//		daoA.save(a4);
//		
//		
//		Emprunt e1=new Emprunt(a1,m1,LocalDate.now());		
//		Emprunt e2=new Emprunt(a1,m2,LocalDate.now());
//		Emprunt e3=new Emprunt(a3,m1,LocalDate.now());
//		Emprunt e4=new Emprunt(a2,m1,LocalDate.now());
//		
//		EmpruntDAO daoE = new EmpruntDAO();
//		daoE.save(e1);
//		daoE.save(e2);
//		daoE.save(e3);
//		daoE.save(e4);
//		
//		
//		
//		
//		List<Adherent> listAdhe = dao.listeAdherents(m1);
//		for (Adherent adherent : listAdhe) {
//			System.out.println(adherent);
//		}
//		
//		
//		
//		
//		UtilisateurDAO u1=new UtilisateurDAO();
//		u1.save(new Utilisateur("Peladan","Cecile","Cece-4","beatrix412"));
//		
//		System.out.println(u1.verifConnection("Cece-4", "beatrix412"));
		
	}

}
