
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
					function ($routeParams, $scope, serviceEmprunts, serviceMedia, typeOptions) {
						var mediaCourant;
						var ficheMediaCtrl = this; 

						var promesseMediaCourant = serviceMedia.getMedia($routeParams.idMedia);

						ficheMediaCtrl.empruntsCharges = false;

						gererMAJMedia(promesseMediaCourant);

						ficheMediaCtrl.listeEmprunts = [];

						ficheMediaCtrl.formMedia = { media: {} };
						ficheMediaCtrl.formMedia.typesMedia = typeOptions.list;

						ficheMediaCtrl.formEmprunt = {};

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
																		ficheMediaCtrl.formEmprunt.adherent,
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

						function mettreAJourEmprunts(media) {
							ficheMediaCtrl.empruntsCharges = false;
							var promesseEmprunts = serviceEmprunts.rechercherParMedia(media);
							promesseEmprunts
									.then(
											function (liste) {
												ficheMediaCtrl.listeEmprunts = liste;
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
					}
			);
})();
