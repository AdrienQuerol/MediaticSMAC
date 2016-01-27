package modele.test;

import java.util.ArrayList;
import java.util.List;

import modele.media.CD;
import modele.media.DVD;
import modele.media.Livre;
import modele.media.Media;
import modele.util.EmailInvalideException;
import modele.util.Utils;

public class TestUtils {
	public static void main (String[] args) {
		List<Media> liste = new ArrayList<>();
		liste.add(new Livre("toiti", "Mikael"));
		liste.add(new Livre("Les fleurs des champs", "Cecile"));
		liste.add(new DVD("Star Wars", "George Lucas"));
		liste.add(new DVD("Bambi", "Walt Disney"));
		liste.add(new CD("In extremis", "Cabrel"));
		liste.add(new CD("fkjdsfkl", "Mikael"));
		
//		List<Object> resultatRecherche = Utils.recherche(liste, x -> x.getNom().startsWith("S"));
		
		String email = "cecile.peladan@gmail.com";
		String email2 = "cécile.peladan@gmail.com";
		String email3 = "cecile peladan@gmail.com";
		String email4 = "mikael.morinasfr.fr";
		String email5 = "mikael.morin@.sfr.fr";
		try {
			System.out.println(Utils.emailValide(email));
		} catch (EmailInvalideException e) {
			// TODO Auto-generated catch block
			System.out.println(e + ": email invalide");
			e.printStackTrace();
		}
		try {
			System.out.println(Utils.emailValide(email2));
		} catch (EmailInvalideException e) {
			// TODO Auto-generated catch block
			System.out.println(e + ": email invalide");
			e.printStackTrace();
		}
		try {
			if (Utils.emailValide(email3))
				System.out.println(email3 + ": email valide");;
		} catch (EmailInvalideException e) {
			System.out.println(e.getEmailInvalid() + ": email invalide");
		}
		try {
			if (Utils.emailValide(email4))
				System.out.println(email4 + ": email valide");;
		} catch (EmailInvalideException e) {
			System.out.println(e.getEmailInvalid() + ": email invalide");
		}
		try {
			if (Utils.emailValide(email5))
				System.out.println(email5 + ": email valide");;
		} catch (EmailInvalideException e) {
			System.out.println(e.getEmailInvalid() + ": email invalide");
		}
	}
}
