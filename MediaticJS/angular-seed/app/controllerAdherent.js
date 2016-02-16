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
	$routeProvider.when('/adherents', {
		templateUrl : 'adherents.html',
		controller : 'AdherentController',
		controllerAs : 'adherentCtrl',
		resolve: {
			title:function(){
				return "Recherche Adherent";
			}
		} 
	});
})

.controller('AdherentController', function(servAdh,$rootScope,title,cartAdh,$location) {

	$rootScope.pageTitle = title;
	var ctrl = this;
	
	var listSearchAdh=[];
	ctrl.isLoaded=false;
	ctrl.isPageRecherche = true;
	ctrl.adherent=cartAdh.motCle;
	
	ctrl.res = function(){
		servAdh.addAdherent();
	}
	
	ctrl.liste = function(){
		servAdh.getList().then(function(liste){
			console.log(liste);
		})		
	}
	
	
//	
//	ctrl.rech = function(){
//		servAdh.rechAdherent(ctrl.adherent);
//	}
	
	ctrl.addAdh = function(){
		servAdh.addAdherent(ctrl.add);
	}
	
	ctrl.getlistsearch = function(){
		return listSearchAdh;
	};
	
	ctrl.getSearchListResultat=function(){
		cartAdh.setMotCle(ctrl.search);
		return servAdh.rechAdherent(ctrl.search).then(function(t){
			listSearchAdh = t;
			console.log(t);
			ctrl.isLoaded=true;
			
		});
	}
	
	ctrl.searchAdherent=function(){
		//cartAdh.setMotCle(ctrl.adherent);
		
		ctrl.adherent = ctrl.search;
		ctrl.getSearchListResultat();
		ctrl.isPageRecherche = false;
	}
	
	ctrl.getFiche= function(adh){
		$location.url("/fiche_adherent/"+adh.id);
	}
	
	
	
});