package modele.adherent;

import java.time.LocalDate;

import modele.media.Media;

public class Emprunt {
	protected Adherent adherent;
	protected Media media;
	protected LocalDate dateEmprunt, dateRetour;
	
	// lien avec adherent
	
	
	///
	
	// lien avec media
	
	
	///

	public Emprunt(Adherent a, Media m, LocalDate dateEmprunt) {
		this.adherent = a;
		this.media = m;
		this.dateEmprunt=dateEmprunt;
		dateRetour = dateEmprunt.plusDays(media.getNbJoursLoues());
	}
	

	public Adherent getAdherent() {
		return adherent;
	}


	public void setAdherent(Adherent adherent) {
		this.adherent = adherent;
	}


	public Media getMedia() {
		return media;
	}


	public void setMedia(Media media) {
		this.media = media;
	}


	public LocalDate getDateEmprunt() {
		return dateEmprunt;
	}


	public void setDateEmprunt(LocalDate dateEmprunt) {
		this.dateEmprunt = dateEmprunt;
	}


	public LocalDate getDateRetour() {
		return dateRetour;
	}


	public void setDateRetour(LocalDate dateRetour) {
		this.dateRetour = dateRetour;
	}


	public String toString() {
		return "Emprunt [adherent=" + adherent + ", media=" + media + ", dateRetour=" + dateRetour + "]";
	}

}
