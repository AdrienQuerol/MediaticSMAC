package modele.test;

import modele.media.CD;
import modele.media.DVD;
import modele.media.Livre;
import modele.media.Media;

public class TestMedia {
	public static void main(String[] args) throws Exception {
		Media livre = new Livre("titre livre", "auteur livre");
		Media CD = new CD("titre CD", "auteur CD");
		Media DVD = new DVD("titre DVD", "auteur DVD");

		String s = livre.toString();
		if (!"<Livre:0 \"titre livre\" \"auteur livre\" []>".equals(s))
			throw new Exception("Erreur toString livre: " + s);

		s = CD.toString();
		if (!"<CD:1 \"titre CD\" \"auteur CD\" []>".equals(s))
			throw new Exception("Erreur toString CD: " + s);

		s = DVD.toString();
		if (!"<DVD:2 \"titre DVD\" \"auteur DVD\" []>".equals(s))
			throw new Exception("Erreur toString DVD: " + s);

		int nbJoursL = livre.getNbJoursLoues();
		if (nbJoursL != 30)
			throw new Exception("Nb jours loues livres: " + nbJoursL);

		int nbJoursD = DVD.getNbJoursLoues();
		if (nbJoursD != 15)
			throw new Exception("Nb jours loues DVD: " + nbJoursD);

		int nbJoursC = CD.getNbJoursLoues();
		if (nbJoursC != 15)
			throw new Exception("Nb jours loues CD: " + nbJoursC);

		System.out.println("OK");
	}
}
