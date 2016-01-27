package modele.util;


import java.util.Collection;

import org.apache.commons.validator.routines.EmailValidator;

import modele.adherent.Adherent;



public class Utils {
	
	public static boolean emailValide (String email) throws EmailInvalideException {
		if (EmailValidator.getInstance().isValid(email))
			return true;
		
		throw new EmailInvalideException(email);
	}

	public void trieAdherentNom(Collection<Adherent> liste){
		
	}
}
