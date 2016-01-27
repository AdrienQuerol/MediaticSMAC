package modele.media;

public class CD extends Media {

	public CD (String titre, String auteur) {
		super(titre, auteur, 15);
	}
	
	public String getType () {
		return "CD";
	}
}
