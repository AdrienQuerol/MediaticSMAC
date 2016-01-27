package modele.media;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import modele.adherent.Emprunt;

@Entity
public abstract class Media {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private final int ID;
	private static int maxID = 0;

	@Column
	private String titre;
	@Column
	private String auteur;
	@Column
	private final int nbJoursLoues;

	private List<Emprunt> emprunts;

	@Column
	private boolean emprunte;

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
		emprunte = true;
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
		} else if (!auteur.toLowerCase().equals(other.auteur.toLowerCase()))
			return false;
		if (titre == null) {
			if (other.titre != null)
				return false;
		} else if (!titre.toLowerCase().equals(other.titre.toLowerCase()))
			return false;
		return true;
	}

	public String toString() {
		String s;
		s = "<" + this.getType() + ":" + this.getID() + " \"" + this.getTitre() + "\" \"" + this.getAuteur() + "\" ";
		s += this.emprunts.toString() + ">";
		return s;
	}

	public boolean estEmprunte() {
		return emprunte;
	}

	protected Media(String titre, String auteur, int nbJoursLoues) {
		this.ID = maxID++;
		this.titre = titre;
		this.auteur = auteur;
		this.nbJoursLoues = nbJoursLoues;
		this.emprunts = new ArrayList<>();
		this.emprunte = false;
	}

}
