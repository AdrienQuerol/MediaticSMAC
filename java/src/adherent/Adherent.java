package adherent;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import media.Media;



public class Adherent {

	protected final int ID;
	protected static int compteur=0;
	protected String nom, prenom;
	protected Date dateNaissance, dateCotisation;
	protected Media mediaEnPossession;
	protected Collection<Media> listeMediaEmpruntes;
	
	public Adherent(String nom, String prenom, Date date){
		ID=compteur;
		compteur++;
		this.nom = nom;
		this.prenom=prenom;
		this.dateNaissance=date;
		listeMediaEmpruntes=new ArrayList<Media>();
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

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public Date getDateCotisation() {
		return dateCotisation;
	}

	public void setDateCotisation(Date dateCotisation) {
		this.dateCotisation = dateCotisation;
	}

	public Media getMediaEnPossession() {
		return mediaEnPossession;
	}

	public void setMediaEnPossession(Media mediaEnPossession) {
		this.mediaEnPossession = mediaEnPossession;
	}

	public int getID() {
		return ID;
	}
	
	
}
