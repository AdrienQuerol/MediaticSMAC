(function () {
	'use strict';
	
	angular
			.module('app.adherent.fiche', ['ServiceAdherent'])
			.config(
					function($routeProvider) {
						$routeProvider
								.when(
										'/fiche_adherent/:idAdh',
										{
												templateUrl : 'fiche_Adherent.html',
												controller : 'ficheAdherentController',
												controllerAs : 'ficheAdherentCtrl'
										}
						);

					}
			)
			.controller(
					'ficheAdherentController',
					 function (servAdh,$routeParams) {
						console.log("salut");
						var ficheAdherentCtrl = this;
						//var promesseAdhCourant = servAdh.getAdherent($routeParams.idAdh);
						//console.log(promesseAdhCourant);
						//ficheAdherentCtrl.formAdherent.adherent.nom
						 ficheAdherentCtrl.formAdherent= {};
						    
						 ficheAdherentCtrl.updateAdherent = function () {
						    	servAdh.modifAdherent(ficheAdherentCtrl.formAdherent.adherent);
						 }
						 
						 
						// ficheAdherentCtrl.data={};
						// recuperation du l'adherent 
//				    	ficheAdherentCtrl.getAdherent = function(){
//							return ficheAdherentCtrl.data;
//						};
						
						servAdh.getAdherent($routeParams.idAdh).then(function(t){
							ficheAdherentCtrl.formAdherent.adherent=t;
								console.log(t);
						});

							
			    }
			);
})();