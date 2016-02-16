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
					 function (servAdh,$routeParams,$location,$rootScope) {
						$rootScope.pageTitle="Fiche Adherent";
						
						var ficheAdherentCtrl = this;
						//var promesseAdhCourant = servAdh.getAdherent($routeParams.idAdh);
						//console.log(promesseAdhCourant);
						//ficheAdherentCtrl.formAdherent.adherent.nom
						 ficheAdherentCtrl.formAdherent= {};
						    
						 ficheAdherentCtrl.updateAdherent = function () {
						    	servAdh.modifAdherent(ficheAdherentCtrl.formAdherent.adherent);
						 }
						 
						 ficheAdherentCtrl.getFiche= function(media){
							 console.log(media);
								$location.url("/fiche_media/"+media.id);
							}
						 
						// ficheAdherentCtrl.data={};
						// recuperation du l'adherent 
//				    	ficheAdherentCtrl.getAdherent = function(){
//							return ficheAdherentCtrl.data;
//						};
						
						servAdh.getAdherent($routeParams.idAdh).then(function(t){
							ficheAdherentCtrl.formAdherent.adherent=t;
								//console.log(t);
						});

					
						
			    }
			);
})();