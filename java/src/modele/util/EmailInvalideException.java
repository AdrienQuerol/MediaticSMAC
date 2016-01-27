package modele.util;

public class EmailInvalideException extends Exception {

	public EmailInvalideException(String email) {
		this.email = email;
	}

	public String getEmailInvalid() {
		return email;
	}

	private String email;

	private static final long serialVersionUID = -3380332214778004297L;
}
