
(function () {
	'use strict';
	
	angular
			.module('app.media.fiche', [])
			.config(
					function($routeProvider) {
						$routeProvider
								.when(
										'/fiche_media/:idMedia',
										{
												templateUrl : 'fiche_media.html',
												controller : 'ficheMediaController',
												controllerAs : 'ficheMediaCtrl'
										}
						);
					}
			)
			.controller(
					'ficheMediaController',
					function ($routeParams, $scope, $location, serviceEmprunts, serviceMedia, typeOptions, servAdh) {
						var mediaCourant;
						var ficheMediaCtrl = this; 

						var promesseMediaCourant = serviceMedia.getMedia($routeParams.idMedia);

						ficheMediaCtrl.empruntsCharges = false;

						gererMAJMedia(promesseMediaCourant);

						ficheMediaCtrl.listeEmprunts = [];

						ficheMediaCtrl.formMedia = { media: {} };
						ficheMediaCtrl.formMedia.typesMedia = typeOptions.list;

						ficheMediaCtrl.formEmprunt = { listeAdherents: {} };

						ficheMediaCtrl.enregistrerMedia = function () {
							gererMAJMedia(
									serviceMedia.updateListMedia(ficheMediaCtrl.formMedia.media)
							);
						};

						ficheMediaCtrl.ajouterEmprunt = function () {
							return promesseMediaCourant
									.then(
											function (media) {
												var promesseNouvelEmprunt =
														serviceEmprunts
																.ajouterEmprunt(
																		ficheMediaCtrl.formEmprunt.adherentSelectionne,
																		media,
																		ficheMediaCtrl.formEmprunt.date
																);
												var promesseNouveauMedia = 
														promesseNouvelEmprunt
																.then(
																		function (emprunt) {
																			return emprunt.media;
																		}
																);
												return gererMAJMedia(promesseNouveauMedia);
											}
									);
						};

						ficheMediaCtrl.ouvrirFicheAdherent = function (adherent) {
							 $location.url("/fiche_adherent/" + adherent.id);
						};

						ficheMediaCtrl.selectionnerAdherent = function (adherent) {
							ficheMediaCtrl.formEmprunt.adherentSelectionne = adherent;
							ficheMediaCtrl.formEmprunt.adherent = angular.uppercase(adherent.nom) + ' ' + adherent.prenom;
							ficheMediaCtrl.formEmprunt.listeAdherents.affiche = false;
							ficheMediaCtrl.formEmprunt.listeAdherents.clic = true;
						};

						function rechercherAdherent (texte) {
							if (angular.isUndefined(texte))
								return;

							// Si la fonction de rappel a été appelée sur la mise à jour liée au clic,
							// et non sur une entrée au clavier, on annule la recherche
							if (ficheMediaCtrl.formEmprunt.listeAdherents.clic) {
								ficheMediaCtrl.formEmprunt.listeAdherents.clic = false;
								return;
							}

							ficheMediaCtrl.formEmprunt.adherentSelectionne = null;

							return servAdh
									.rechTexteAdherent({texte: texte})
									.then(
											function (resultat) {
												ficheMediaCtrl.formEmprunt.listeAdherents.adherents = resultat.slice(0, 5);
												ficheMediaCtrl.formEmprunt.listeAdherents.affiche = resultat.length != 0;
												return resultat;
											}
									);
						};

						function mettreAJourEmprunts(media) {
							ficheMediaCtrl.empruntsCharges = false;
							var promesseEmprunts = serviceEmprunts.rechercherParMedia(media);
							promesseEmprunts
									.then(
											function (liste) {
												ficheMediaCtrl.listeEmprunts = liste;
												ficheMediaCtrl.empruntsCharges = true;
//												ficheMediaCtrl.empruntsCharges = true;
											}
									);
						}

						function gererMAJMedia(promesseMedia) {
							promesseMedia
									.then(
											function (media) {
//												ficheMediaCtrl.mediaCourant = media;
												mediaCourant = media;
												ficheMediaCtrl.formMedia.media.titre  = mediaCourant.titre;
												ficheMediaCtrl.formMedia.media.auteur = mediaCourant.auteur;
												ficheMediaCtrl.formMedia.media.type   = mediaCourant.type;

												mettreAJourEmprunts(media);
											}
									);
							return promesseMedia;
						}

						$scope.$watch(
								'ficheMediaCtrl.formEmprunt.adherent',
								function (nouvelleValeur) {
									rechercherAdherent(nouvelleValeur);
								}
						);
					}
			);
})();
