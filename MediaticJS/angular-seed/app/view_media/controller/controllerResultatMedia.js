"use strict";

angular.module('app.media.rech',[])
	.config(function($routeProvider,$httpProvider) {

			$routeProvider.when('/medias', {
				templateUrl : 'view_media/medias.html',
				controller : 'RechMediaController',
				controllerAs : 'rechmediaCtrl'
			});

			})
	.controller('RechMediaController',
			function(serviceMedia,typeOptions,$rootScope,serviceEmprunts,cartMedia,$location){
				var rechmediaCtrl = this;
				var listSearchMedia=[];
				rechmediaCtrl.isLoadedMedia=false;
				rechmediaCtrl.isPageRecherche = true;
				rechmediaCtrl.listselect = typeOptions.list;
				rechmediaCtrl.media=cartMedia.motCle;
				
				$rootScope.pageTitle="Recherche Media";
								
				
				// recuperation du tableau media 
				rechmediaCtrl.getlistsearch = function(){
					return listSearchMedia;
				};
				
				
				
				
				rechmediaCtrl.getSearchListResultat=function(){
					cartMedia.setMotCle(rechmediaCtrl.media);
					return serviceMedia.getSearchMedia(rechmediaCtrl.media).then(function(t){
						listSearchMedia = t;
						rechmediaCtrl.isLoadedMedia=true;
					});
				}

				
		
				
				rechmediaCtrl.searchMedia=function(){
					rechmediaCtrl.getSearchListResultat();
					rechmediaCtrl.isPageRecherche = false;
				}
				
				rechmediaCtrl.getFiche= function(resMedia){
					$location.url("/fiche_media/"+resMedia.id);
				}
				
				if(angular.isDefined(rechmediaCtrl.media.titre) || angular.isDefined(rechmediaCtrl.media.auteur)
						|| angular.isDefined(rechmediaCtrl.media.type)){
					rechmediaCtrl.searchMedia();
				}
	})