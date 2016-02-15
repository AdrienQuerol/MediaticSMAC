
(function () {
	'use strict';
	
	function Emprunt (adherent, media, dateEmprunt, dateRetour) {
//		this.adherent = adherent;
//		this.media = media;
//		this.depart = dateEmprunt;
//		this.retour = dateRetour;
		return {
			adherent: adherent,
			media:     media,
			depart:    dateEmprunt,
			retour:    dateRetour
		}
	}


	angular
			.module('app.services.emprunts', [])
			.factory(
					'serviceEmprunts',
					function ($http) {


						function ListeEmprunts () {

							this.racineServeur = 'http://192.168.1.14:8080/resource';
							this.urlAjoutEmprunt = this.racineServeur + '/emprunt.ajout';
							this.urlGetMedia     = this.racineServeur + '/media.accession';
							this.urlGetAdherent  = this.racineServeur + '/adherent.accession';
							
						}
						
						ListeEmprunts.prototype.ajouterEmprunt = function (media, adherent, dateEmprunt, dateRetour) {
							var emprunt = new Emprunt(media, adherent, dateEmprunt, dateRetour);
							return $http
								.post(this.urlAjoutEmprunt, emprunt)
								.then(
										function (reponse) {
											return reponse.data;
										}
								);
						}
						
						ListeEmprunts.prototype.rechercherParAdherent = function (adh) {	
							return $http
									.get(this.urlGetAdherent, {params: {id: adh.id}})
									.then(
											function (reponse) {
												return reponse.data.emprunt.map(
														function (emp) {
															return new Emprunt(adh, emp.media, emp.depart, emp.retour);
														}
												);
											}
									);
						}
						
						ListeEmprunts.prototype.rechercherParMedia = function (media) {
							
							return $http
									.get(this.urlGetMedia, {params: {id: media.id}})
									.then(
											function (reponse) {
												return reponse.data.emprunteurs.map(
														function (emprunteur) {
															return new Emprunt(emprunteur.adherent, media, emprunteur.depart, emprunteur.retour);
														}
												)
											}
									);
						}
						
						ListeEmprunts.prototype.DernierEmpruntDuMedia = function (media) {
						
							return this.rechercherParMedia(media).then(
									function (data){ 
										return data[0];
										}
									);
						}
						
						return new ListeEmprunts();				
					}
			);
})();
