package media;

public class Livre extends Media {

	public Livre (String titre, String auteur) {
		super(titre, auteur, 30);
	}
	
	public String getType () {
		return "Livre";
	}
}
