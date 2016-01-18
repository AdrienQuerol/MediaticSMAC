package media;

import java.util.ArrayList;
import java.util.List;

import adherent.Emprunt;

public abstract class Media {
	public abstract String getType();

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getAuteur() {
		return auteur;
	}

	public void setAuteur(String auteur) {
		this.auteur = auteur;
	}

	public int getID() {
		return ID;
	}

	public int getNbJoursLoues() {
		return nbJoursLoues;
	}

	public List<Emprunt> getEmprunts() {
		return emprunts;
	}

	public void ajouterEmprunt(Emprunt e) {
		if (emprunts.contains(e))
			return;

		emprunts.add(e);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Media other = (Media) obj;
		if (auteur == null) {
			if (other.auteur != null)
				return false;
		} else if (!auteur.equals(other.auteur))
			return false;
		if (titre == null) {
			if (other.titre != null)
				return false;
		} else if (!titre.equals(other.titre))
			return false;
		return true;
	}

	public String toString() {
		String s;
		s = "<" + this.getType() + ":" + this.getID() + " \"" + this.getTitre() + "\" \"" + this.getAuteur() + "\" ";
		s += this.emprunts.toString() + ">";
		return s;
	}

	protected Media(String titre, String auteur, int nbJoursLoues) {
		this.ID = maxID++;
		this.titre = titre;
		this.auteur = auteur;
		this.nbJoursLoues = nbJoursLoues;
		this.emprunts = new ArrayList<>();
	}

	private final int ID;
	private static int maxID = 0;

	private String titre;
	private String auteur;
	private final int nbJoursLoues;
	private List<Emprunt> emprunts;
}
