angular.module('LoginApp', [ 'ServiceLogin' ])

.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl : 'login.html',
		controller : 'LoginController',
		controllerAs : 'loginCtrl'
	});
})

.controller('LoginController', function($window,servLogin,$rootScope) {
	$rootScope.pageTitle = "Login";
	ctrl = this;
	
	ctrl.authentification = function(){
		servLogin.verifLogin(ctrl.log);
		//redirection vers rechreche media (dépendra du retour de la requete)
		$window.location.href = '#/recherche_media';
	}

});