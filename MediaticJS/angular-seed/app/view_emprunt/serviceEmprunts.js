
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
					function ($http, $q, $timeout) {


						function ListeEmprunts () {

							this.racineServeur = 'http://localhost:8080/api';
							this.urlAjoutEmprunt = this.racineServeur + '/emprunt.ajout';
							this.urlGetMedia     = this.racineServeur + '/medias';
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
							var promise = $http
									.get(this.urlGetMedia, {params: {id: media.id}})
									.then(
											function (reponse) {
												var emprunteurs = reponse.data.emprunteurs;//? reponse.data.emprunteurs : [];
												var resultat = emprunteurs.map(
														function (emprunteur) {
															return new Emprunt(
																	emprunteur.adherent,
																	media,
																	emprunteur.depart,
																	emprunteur.retour
															);
														}
												);
												return resultat;
											}
									);
							console.warn('TODO A supprimer avant MEP');
							console.log('J\'ai appelé le serveur, j\'attend sa réponse');
							var defer= $q.defer();
							promise.then(function (resultat) {
								console.log('J\'ai la réponse du serveur ... je fait poireauter l\'utilisateur ');
								defer.promise.then(
										function () {
											return resultat;
										}
								);
								$timeout(function(){
									console.log('Faudrait pas perdre un client, je fini de le faire poireauter.');
									defer.resolve(resultat);
								},5000);
								return resultat;
							});
							return defer.promise;
//							return promise;
						};
						
						ListeEmprunts.prototype.DernierEmpruntDuMedia = function (media) {
						
							return this.rechercherParMedia(media).then(
									function (data){ 
										return data[0];
										}
									);
						};

						return new ListeEmprunts();
					}
			);
})();
