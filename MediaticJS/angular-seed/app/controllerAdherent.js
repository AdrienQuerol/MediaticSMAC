angular.module('AdherentApp', [ 'ServiceAdherent' ])

.config(function($routeProvider) {
	$routeProvider.when('/nouveau_adherent', {
		templateUrl : 'nouveau_adherent.html',
		controller : 'AdherentController',
		controllerAs : 'adherentCtrl',
		resolve: {
			title:function(){
				return "Nouveau Adherent";
			}
		} 

	}),
	$routeProvider.when('/recherche_adherent', {
		templateUrl : 'recherche_adherent.html',
		controller : 'AdherentController',
		controllerAs : 'adherentCtrl',
		resolve: {
			title:function(){
				return "Recherche Adherent";
			}
		} 
	});
})

.controller('AdherentController', function(servAdh,$rootScope,title) {

	$rootScope.pageTitle = title;
	var ctrl = this;
	
	ctrl.res = function(){
		servAdh.addAdherent();
	}
	
	ctrl.liste = function(){
		servAdh.getList().then(function(liste){
			console.log(liste);
		})		
	}
	
	ctrl.rech = function(){
		servAdh.rechAdherent(ctrl.search);
	}
	
	ctrl.addAdh = function(){
		servAdh.addAdherent(ctrl.add);
	}

});