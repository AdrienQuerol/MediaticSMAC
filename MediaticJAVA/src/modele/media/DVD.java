package modele.media;

public class DVD extends Media {

	public DVD(String titre, String auteur) {
		super(titre, auteur, 15);
	}

	public String getType() {
		return "DVD";
	}
}
