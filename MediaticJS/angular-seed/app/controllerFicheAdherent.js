(function () {
	'use strict';
	
	angular
			.module('app.adherent.fiche', ['ServiceAdherent'])
			.config(
					function($routeProvider) {
						$routeProvider
								.when(
										'/fiche_Adherent',
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
					 function (servAdh) {
						var ficheAdherentCtrl = this;
						
						
						    ficheAdherentCtrl.formAdherent= {};
						    
						    ficheAdherentCtrl.updateAdherent = function () {
						    	servAdh.modifAdherent(ficheAdherentCtrl.formAdherent.adherent);
						
					      	

							
				     }
			    }
			);
})();