angular.module('AdherentApp', [ 'ServiceAdherent' ])

.config(function($routeProvider) {
	$routeProvider.when('/nouveau_adherent', {
		templateUrl : 'view_adherent/nouveau_adherent.html',
		controller : 'AdherentController',
		controllerAs : 'adherentCtrl',
		resolve: {
			title:function(){
				return "Nouveau Adherent";
			}
		} 

	}),
	$routeProvider.when('/adherents', {
		templateUrl : 'view_adherent/adherents.html',
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
	var maxp={};
	var listSearchAdh=[];
	ctrl.isLoaded=false;
	ctrl.isPageRecherche = true;
	ctrl.search=cartAdh.motCle;
	ctrl.page =0;
	
	
	ctrl.res = function(){
		servAdh.addAdherent();
	}
	
	ctrl.liste = function(){
		servAdh.getList().then(function(liste){
			console.log(liste);
		})		
	}
	
	
	
	ctrl.getPage = function(){
		ctrl.listPage=[];
		ctrl.listPage.push(0);
		
		var pagecourante=ctrl.page;
		
		if(maxp.pages<5){
			for(var i=1;i<maxp.pages;i++)
				ctrl.listPage.push(i);
		}
		else{
			for(var i=pagecourante+1;i<=ctrl.page+1 && ctrl.page+1<maxp.pages;i++)
				ctrl.listPage.push(i);
			
			ctrl.listPage.push(maxp.pages-1);
		}
		
		console.log("listgetpage",ctrl.listPage);
		return ctrl.listPage;
	};
	
	
	ctrl.setPage = function(pageid){
		console.log(pageid);
		ctrl.page = pageid;
		ctrl.getListRes(ctrl.page);
	};
	
	
	ctrl.addAdh = function(){
		servAdh.addAdherent(ctrl.add);
	}
	
	ctrl.getlistsearch = function(){
		return listSearchAdh;
	};
	
	ctrl.getListRes=function(pageid){
		// recherche de l'adherent
		cartAdh.setMotCle(ctrl.search);
		return servAdh.rechAdherent(ctrl.search,pageid).then(function(t){
			listSearchAdh = t;
			ctrl.isLoaded=true;
			
		});
	}
	
	// donne la page max
	ctrl.maxpage=function(){
		return maxp;
	}
	
	ctrl.getMaxPage=function(){
		//recuperation du nombre de page max
		return servAdh.getMaxPage(ctrl.search).then(function(i){
			console.log(i);
			maxp= angular.copy(i);
			console.log("max:",maxp);

			
		});
		
	}
	
	ctrl.getSearchListResultat=function(){
		ctrl.getMaxPage();
		
		
		ctrl.getListRes(0);
	}
	
	ctrl.searchAdherent=function(){
		ctrl.adherent = ctrl.search;
		ctrl.getSearchListResultat();
		ctrl.isPageRecherche = false;
	}
	
	ctrl.getFiche= function(adh){
		
		$location.url("/fiche_adherent/"+adh.id);
	}
	

	
	

	
	
	if(angular.isDefined(ctrl.search.nom) || angular.isDefined(ctrl.search.id)){
		ctrl.searchAdherent();
	}

	
});