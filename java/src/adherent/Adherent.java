package adherent;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import media.Media;

public class Adherent {

	protected final int ID;
	protected static int compteur = 0;
	protected String nom, prenom;
	protected LocalDate dateNaissance, dateCotisation;
	protected Media mediaEnPossession;
	protected Collection<Media> listeMediaEmpruntes;

	public Adherent(String nom, String prenom, LocalDate date) {
		ID = compteur;
		compteur++;
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = date;
		listeMediaEmpruntes = new ArrayList<Media>();
	}
	
	public boolean ajoutMedia(Media m){
		return listeMediaEmpruntes.add(m);
	}

	public boolean supprMedia(Media m){
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

	public int getID() {
		return ID;
	}

	public String toString() {
		return "Adherent [ID=" + ID + ", nom=" + nom + ", prenom=" + prenom + ", dateNaissance=" + dateNaissance
				+ ", dateCotisation=" + dateCotisation + ", mediaEnPossession=" + mediaEnPossession
				+ ", listeMediaEmpruntes=" + listeMediaEmpruntes + "]";
	}
	
	public int calculAge(){
		int d1,m1,a1;
		d1=dateNaissance.getDayOfMonth();
		m1=dateNaissance.getMonthValue();
		a1=dateNaissance.getYear();
		
		LocalDate now = LocalDate.now();
		int d2,m2,a2;
		d2=now.getDayOfMonth();
		m2=now.getMonthValue();
		a2=now.getYear();
		
		if(m1>m2){
			return a2-a1-1;
		}
		else{
			if(d1>d2)
				return a2-a1-1;
			else
				return a2-a1;				
		}
		
	}

}
