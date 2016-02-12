
(function() {
	'use strict';

	describe(
			'service Emprunts',
			function() {
		
				var $httpBackend, serviceEmprunts;
		
				var racineServeur = 'http://192.168.1.14:8080/resource';
				var urlAjoutEmprunt = racineServeur + '/emprunt.ajout';
				var urlGetMedia     = racineServeur + '/media.accession';
				var urlGetAdherent  = racineServeur + '/adherent.accession';
		
				beforeEach(
						function() {
							module('app.services.emprunts');
							inject(function(_$httpBackend_, _serviceEmprunts_) {
								$httpBackend = _$httpBackend_;
								serviceEmprunts = _serviceEmprunts_;
							});
						}
				);
		
				afterEach(
						function() {
							$httpBackend.verifyNoOutstandingExpectation();
							$httpBackend.verifyNoOutstandingRequest();
						}
				);
		
				describe(
						'méthode rechercherParAdherents',
						function() {
							it(
									'devrait appeler une méthode GET du serveur avec l\'id de l\'adhérent en paramètre',
									function() {
										var adherent = {
												"id" : 3,
												"nom" : "Nicolède",
												"prenom" : "Cixi",
												"date_naissance" : "1998-07-12 21:00:00.000",
												"email" : "cixi@troy.com",
												"adresse" : {
													"ligne1" : "3eme maison",
													"ligne2" : "chambre de Cixi",
													"codepostal" : "3-333",
													"ville" : "Eckmul"
												}
										};
										var reponseBouchonnee = {
											"id" : adherent.id,
											"nom" : adherent.nom,
											"prenom" : adherent.prenom,
											"date_naissance" : adherent.date_naissance,
											"email" : adherent.email,
											"adresse" : adherent.adresse,
											"cotisation" : {
												"debut" : "2016-01-01 00:00:00.000",
												"fin" : "2017-01-01 00:00:00:.000",
												"montant" : 2
											},
											"age" : 17,
											"emprunt" : [ {
												"media" : {
													"id" : 2,
													"titre" : "Lanfeust des étoiles"
												},
												"depart" : "2014-01-17 00:00:00.000",
												"retour" : "2014-02-01 00:00:00.000"
											}, {
												"media" : {
													"id" : 2,
													"titre" : "Lanfeust des étoiles"
												},
												"depart" : "2014-02-20 00:00:00.000",
												"retour" : "2014-03-08 00:00:00.000"
											} ]
										};
										var resultatAttendu =
											[
											 	{
											 		adherent: adherent,
													"media" : {
														"id" : 2,
														"titre" : "Lanfeust des étoiles"
													},
													"depart" : "2014-01-17 00:00:00.000",
													"retour" : "2014-02-01 00:00:00.000"
											 	},
											 	{
											 		adherent: adherent,
													"media" : {
														"id" : 2,
														"titre" : "Lanfeust des étoiles"
													},
													"depart" : "2014-02-20 00:00:00.000",
													"retour" : "2014-03-08 00:00:00.000"
											 	}
											];
										var url = urlGetAdherent + '?id=' + adherent.id;
										var resultatObtenu = false;
										var resultat;
										$httpBackend
												.expectGET(url)
												.respond(reponseBouchonnee);
										var promesseResultat = serviceEmprunts.rechercherParAdherent(adherent);
										promesseResultat
												.then(
														function (resultat) {
															resultatObtenu = true;
															expect(resultat).toEqual(resultatAttendu);
														}
												)
										$httpBackend.flush();
										expect(resultatObtenu).toBe(true);
									}
							);
						}
				);

				describe(
						'méthode rechercherParMedia',
						function() {
							it(
									'devrait appeler une méthode GET du serveur avec l\'id de l\'adhérent en paramètre',
									function() {
										var media =
												{
													"id": 10,
													"titre": "La petite maison dans la prairie",
													"auteur": "Laura Ingalss Wilder",
													"type": "Livre"
												};
										var reponseBouchonnee =
 												{
													"id" : 10,
													"titre" : "La petite maison dans la prairie",
													"auteur" : "Laura Ingalss Wilder",
													"type" : "Livre",
													"emprunteurs" : 
															[
																{
																	"adherent" : {
																		"id" : 1,
																		"nom" : "Nicolède",
																		"prenom" : "Maitre"
																	},
																	"depart" : "2015-01-01 00:00:00.000",
																	"retour" : "2015-01-15 00:00:00.000"
																},
																{
																	"adherent" : {
																		"id" : 2,
																		"nom" : "Nicolède",
																		"prenom" : "Cian"
																	},
																	"depart" : "2015-01-17 00:00:00.000",
																	"retour" : "2015-02-01 00:00:00.000"
																},
																{
																	"adherent" : {
																		"id" : 3,
																		"nom" : "Nicolède",
																		"prenom" : "Cixi"
																	},
																	"depart" : "2015-01-17 00:00:00.000",
																	"retour" : "2015-02-01 00:00:00.000"
																},
																{
																	"adherent" : {
																		"id" : 4,
																		"nom" : "Le troll",
																		"prenom" : "Hébus"
																	},
																	"depart" : "2015-01-17 00:00:00.000",
																	"retour" : "2015-02-01 00:00:00.000"
																}
															]
 													};
										var resultatAttendu =
												[
												 	{
												 		media: media,
														"adherent" : {
															"id" : 1,
															"nom" : "Nicolède",
															"prenom" : "Maitre"
														},
														"depart" : "2015-01-01 00:00:00.000",
														"retour" : "2015-01-15 00:00:00.000"
												 	},
												 	{
												 		media: media,
														"adherent" : {
															"id" : 2,
															"nom" : "Nicolède",
															"prenom" : "Cian"
														},
														"depart" : "2015-01-17 00:00:00.000",
														"retour" : "2015-02-01 00:00:00.000"
												 	},
												 	{
												 		media: media,
														"adherent" : {
															"id" : 3,
															"nom" : "Nicolède",
															"prenom" : "Cixi"
														},
														"depart" : "2015-01-17 00:00:00.000",
														"retour" : "2015-02-01 00:00:00.000"
												 	},
												 	{
												 		media: media,
														"adherent" : {
															"id" : 4,
															"nom" : "Le troll",
															"prenom" : "Hébus"
														},
														"depart" : "2015-01-17 00:00:00.000",
														"retour" : "2015-02-01 00:00:00.000"
												 	}
												];
										var url = urlGetMedia + '?id=' + media.id;
										var resultatObtenu = false;
										var resultat;
										$httpBackend
												.expectGET(url)
												.respond(reponseBouchonnee);
										var promesseResultat = serviceEmprunts.rechercherParMedia(media);
										promesseResultat
												.then(
														function (resultat) {
															resultatObtenu = true;
															expect(resultat).toEqual(resultatAttendu);
														}
												)
										$httpBackend.flush();
										expect(resultatObtenu).toBe(true);
									}
							);
						}
				);
				
				describe(
						'méthode ajouterEmprunt',
						function() {
							it(
									'devrait appeler une méthode POST  du serveur en envoyant un objet emprunt',
									function() {
										var emprunt =
												{
												"adherent" : {
													"id" : 1,
													"nom" : "Nicolède",
													"prenom" : "Maitre"
												},
												"media" : {
													"id" : 2,
													"titre" : "Lanfeust des étoiles"
												},
												"depart" : "2015-01-01 00:00:00.000",
												"retour" : "2015-01-15 00:00:00.000"
												};
										var reponseBouchonnee = emprunt;
										var resultatAttendu = reponseBouchonnee;
										var url = urlAjoutEmprunt;
										var resultatObtenu = false;
										var resultat;
										$httpBackend
												.expectPOST(url, emprunt)
												.respond(reponseBouchonnee);
										var promesseResultat = serviceEmprunts.ajouterEmprunt(emprunt.adherent, emprunt.media, emprunt.depart, emprunt.retour);
										promesseResultat
												.then(
														function (resultat) {
															resultatObtenu = true;
															expect(resultat).toEqual(resultatAttendu);
														}
												)
										$httpBackend.flush();
										expect(resultatObtenu).toBe(true);
									}
							);
						}
				);


			}
	);
})();