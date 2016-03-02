"use strict";

angular
		.module(
				'app',
				[
				 'ngRoute',
				 'ngSanitize',
				 'AdherentApp',
                 'LoginApp',
				 'ServiceAdherent',
                 'ServiceLogin',
                 'app.adherent.fiche',
				 'app.media.nouv',
				 'app.media.rech',
				 'app.media.fiche',
				 'app.services.medias',
				 'app.services.emprunts'
				 ]
		)

		.config(function($routeProvider,$httpProvider) {

			$routeProvider.otherwise({
				redirectTo : '/login'
			});
			$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF8';
			//$httpProvider.defaults.headers.post['Content-Type']='application/json;charset=UTF8';
			
		})

		.controller('appContoller', function() {
			var appController=this;
		
			appController.Deconnection= function(){
				//RechMediaController.isPageRecherche=false;
				$location.url("/login");
			}
			
			
			
		});

