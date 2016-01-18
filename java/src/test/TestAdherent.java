package test;

import java.time.LocalDate;
import java.util.Date;

import adherent.Adherent;

public class TestAdherent {

	public static void main(String[] args) {
		LocalDate d = LocalDate.now();

		Adherent a = new Adherent("bekkara", "salim", d);
		Adherent b = new Adherent("querol", "adrien", d);
		Adherent c = new Adherent("bekera", "salim", d);

		System.out.println(d);

	}

}
