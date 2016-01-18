package adherent;

import java.util.Date;
import media.Media;

public class Emprunt {
	protected Adherent adherent;
	protected Media media;
	protected Date dateRetour;
	
	public Emprunt(Adherent a, Media m){
		this.adherent=a;
		this.media=m;
	}
	
	public Date calculerDateRetour(){
		return new Date();
	}
	
	
}
