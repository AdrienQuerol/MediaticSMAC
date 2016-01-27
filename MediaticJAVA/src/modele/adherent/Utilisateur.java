package modele.adherent;

public class Utilisateur extends Personne {
	
	public Utilisateur() {
	}
	
	public Utilisateur(String nom, String prenom) {
		super(nom, prenom);
	}
	
	public Utilisateur(String nom, String prenom, String login, String motDePasse) {
		super(nom, prenom);
		this.login = login;
		this.motDePasse = motDePasse;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getMotDePasse() {
		return motDePasse;
	}

	public void setMotDePasse(String motDePasse) {
		this.motDePasse = motDePasse;
	}

	private String login, motDePasse;
}
