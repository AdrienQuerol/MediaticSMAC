package modele.media;

import javax.persistence.Entity;

@Entity
public class DVD extends Media {

	public DVD (String titre, String auteur) {
		super(titre, auteur);
	}
	
	public DVD(){
		super();
	}

	public String getType() {
		return "DVD";
	}

	@Override
	public int getNbJoursLoues() {
		return 15;
	}
}
