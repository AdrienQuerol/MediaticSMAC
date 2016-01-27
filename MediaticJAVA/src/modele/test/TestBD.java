package modele.test;

import java.time.LocalDate;

import dao.AdherentDAO;
import dao.MediaDAO;
import modele.adherent.Adherent;
import modele.media.CD;
import modele.media.DVD;
import modele.media.Livre;
import modele.media.Media;

public class TestBD {

	public static void main(String[] args) {
		MediaDAO dao = new MediaDAO();
		Media m = new CD("titre","bobobobo");
		Media m1 = new Livre("Les fleurs du mal","baudelaire");
		Media m2 = new DVD("Batman","Joker");
		Media m3 = new DVD("Star Wars","Lucas");
		Media m4 = new CD("In extremis","Cabrel");
		//dao.save(m);
		
		dao.save(m1);
		dao.save(m2);
		dao.save(m3);
		dao.save(m4);
		
		Media m21 = (Media)dao.rechercheMedia("titre","bobobobo","CD");
		System.out.println(m21);
		
		
		Adherent a1=new Adherent("Peladan","Cecile",LocalDate.of(1992,12,03)); 
		Adherent a2=new Adherent("Querol","Adrien",LocalDate.of(1992,11,23)); 
		Adherent a3=new Adherent("Morin","Mikael",LocalDate.of(1992,01,15)); 
		Adherent a4=new Adherent("Bekkara","Salim",LocalDate.of(1992,9,13)); 
		
		AdherentDAO daoA = new AdherentDAO();
		
		Emprunt e1=new Emprunt()		
		
		daoA.save(a1);
		daoA.save(a2);
		daoA.save(a3);
		daoA.save(a4);
		
		daoA.listeAdherents
	}

}
