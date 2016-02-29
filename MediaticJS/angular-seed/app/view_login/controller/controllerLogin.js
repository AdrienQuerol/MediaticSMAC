angular.module('LoginApp', [])

.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl : 'view_login/login.html',
		controller : 'LoginController',
		controllerAs : 'loginCtrl'
	});
})

.controller('LoginController', function($location,servLogin,$rootScope) {
	$rootScope.pageTitle = "Login";
	ctrl = this;
	
	ctrl.authentification = function(){
		servLogin.verifLogin(ctrl.log);
		//redirection vers rechreche media (dépendra du retour de la requete)
		$location.url('/medias');
	}

});