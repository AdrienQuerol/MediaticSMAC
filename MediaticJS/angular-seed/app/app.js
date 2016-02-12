angular.module('app', ['ngRoute', 'ServiceAdherent','AdherentApp']).config(function($httpProvider,$routeProvider) {
	$routeProvider.otherwise({
		redirectTo : '/adherent'
	});
	$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF8';
});