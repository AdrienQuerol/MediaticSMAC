package utils;


import org.apache.commons.validator.routines.EmailValidator;



public class Utils {
	
	public static boolean emailValide (String email) throws EmailInvalideException {
		if (EmailValidator.getInstance().isValid(email))
			return true;
		
		throw new EmailInvalideException(email);
	}
}
