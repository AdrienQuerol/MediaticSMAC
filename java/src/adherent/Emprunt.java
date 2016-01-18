package adherent;

import java.time.LocalDate;
import media.Media;

public class Emprunt {
	protected Adherent adherent;
	protected Media media;
	protected LocalDate dateEmprunt, dateRetour;

	public Emprunt(Adherent a, Media m, LocalDate dateEmprunt) {
		this.adherent = a;
		this.media = m;
	}

	public LocalDate calculerDateRetour() {

		return null;
	}

	public String toString() {
		return "Emprunt [adherent=" + adherent + ", media=" + media + ", dateRetour=" + dateRetour + "]";
	}

}
