"use strict";

angular.module('app', [ 'ngRoute', 'ServiceAdherent','AdherentApp', 'ngSanitize', 'app.services.medias','app.media.nouv','app.media.rech', 'app.media.fiche','app.adherent.fiche' ])
		.config(function($routeProvider,$httpProvider) {

			$routeProvider.otherwise({
				redirectTo : '/fiche_Adherent'
			});
			$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF8';
			//$httpProvider.defaults.headers.post['Content-Type']='application/json;charset=UTF8';
			
		})

		.controller('appContoller', function() {

		});

