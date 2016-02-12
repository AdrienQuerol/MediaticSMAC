
"use strict";

angular.module('app', [ 'ngRoute', 'ngSanitize', 'app.services.medias','app.media.nouv','app.media.rech' ])
		.config(function($routeProvider,$httpProvider) {

			$routeProvider.otherwise({
				redirectTo : '/nouveau_media'
			});
			$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF8';
			//$httpProvider.defaults.headers.post['Content-Type']='application/json;charset=UTF8';
			
		})

		.controller('appContoller', function() {

		});

