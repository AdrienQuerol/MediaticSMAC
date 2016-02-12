<<<<<<< HEAD
angular.module('app', ['ngRoute', 'ServiceAdherent','AdherentApp']).config(function($httpProvider,$routeProvider) {
	$routeProvider.otherwise({
		redirectTo : '/adherent'
	});
	$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF8';
});
=======

"use strict";

angular.module('app', [ 'ngRoute', 'ngSanitize', 'app.services.medias','app.media.nouv','app.media.rech', 'app.media.fiche' ])
		.config(function($routeProvider,$httpProvider) {

			$routeProvider.otherwise({
				redirectTo : '/nouveau_media'
			});
			$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF8';
			//$httpProvider.defaults.headers.post['Content-Type']='application/json;charset=UTF8';
			
		})

		.controller('appContoller', function() {

		});

>>>>>>> 01b026529b629f5911286a45e542d1c23ca83d22
