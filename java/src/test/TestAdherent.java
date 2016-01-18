package test;

import java.time.LocalDate;

import adherent.Adherent;
import adherent.Emprunt;
import media.Livre;
import media.Media;

public class TestAdherent {

	public static void main(String[] args) {
		LocalDate d = LocalDate.of(1990, 01, 20);
		System.out.println(d);
		Adherent a = new Adherent("bekkara", "salim", d);
		// Adherent b = new Adherent("querol", "adrien", d);
		// Adherent c = new Adherent("bekera", "salim", d);

		Media m = new Livre("adad", "aeae");

		Emprunt e = new Emprunt(a, m, d);

		System.out.println(a.calculAge());

	}

}
