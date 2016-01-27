package modele.adherent;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

import modele.media.Media;

public class Adherent extends Personne {

	protected static int compteur = 0;
	protected LocalDate dateNaissance, dateCotisation;
	protected Media mediaEnPossession;
	protected Collection<Media> listeMediaEmpruntes;
	protected int montantCotisation;

	public Adherent() {
	}

	public Adherent(String nom, String prenom, LocalDate date) {
		super(nom, prenom);
		this.dateNaissance = date;
		listeMediaEmpruntes = new ArrayList<Media>();
	}

	public Adherent(Long ID, String nom, String prenom, LocalDate date) {
		this(nom, prenom, date);
		this.ID = ID;
	}

	public int getMontantCotisation() {
		return montantCotisation;
	}

	public void setMontantCotisation(int montantCotisation) {
		this.montantCotisation = montantCotisation;
	}

	public boolean ajoutMedia(Media m) {
		return listeMediaEmpruntes.add(m);
	}

	public boolean supprMedia(Media m) {
		return listeMediaEmpruntes.remove(m);
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public LocalDate getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(LocalDate dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public LocalDate getDateCotisation() {
		return dateCotisation;
	}

	public void setDateCotisation(LocalDate dateCotisation) {
		this.dateCotisation = dateCotisation;
	}

	public Media getMediaEnPossession() {
		return mediaEnPossession;
	}

	public void setMediaEnPossession(Media mediaEnPossession) {
		this.mediaEnPossession = mediaEnPossession;
	}

	public String toString() {
		return "Adherent [ID=" + ID + ", nom=" + nom + ", prenom=" + prenom + ", dateNaissance=" + dateNaissance
				+ ", dateCotisation=" + dateCotisation + ", mediaEnPossession=" + mediaEnPossession
				+ ", listeMediaEmpruntes=" + listeMediaEmpruntes + "]";
	}

	public int calculAge() {
		int d1, m1, a1;
		d1 = dateNaissance.getDayOfMonth();
		m1 = dateNaissance.getMonthValue();
		a1 = dateNaissance.getYear();

		LocalDate now = LocalDate.now();
		int d2, m2, a2;
		d2 = now.getDayOfMonth();
		m2 = now.getMonthValue();
		a2 = now.getYear();

		if (m1 > m2) {
			return a2 - a1 - 1;
		} else {
			if (d1 > d2)
				return a2 - a1 - 1;
			else
				return a2 - a1;
		}

	}

}
