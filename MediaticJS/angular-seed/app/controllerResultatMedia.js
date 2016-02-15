"use strict";

angular.module('app.media.rech',[])
	.config(function($routeProvider,$httpProvider) {

			$routeProvider.when('/resultat_media', {
				templateUrl : 'medias.html',
				controller : 'RechMediaController',
				controllerAs : 'rechmediaCtrl'
			});

			})
	.controller('RechMediaController',
			function(serviceMedia,typeOptions,$rootScope,serviceEmprunts,cartMedia){
				var rechmediaCtrl = this;
		
				$rootScope.pageTitle="Recherche Media";
				
				
				rechmediaCtrl.listselect = typeOptions.list;
				
				// recuperation du tableau media 
				var listSearchMedia=[];
				rechmediaCtrl.isLoadedMedia=false;
				
				rechmediaCtrl.isPageRecherche = true;
				
				rechmediaCtrl.getlistsearch = function(){
					return listSearchMedia;
				};
				
				rechmediaCtrl.media=cartMedia.motCle;
				
				
				rechmediaCtrl.getSearchListResultat=function(){
					cartMedia.setMotCle(rechmediaCtrl.media);
					return serviceMedia.getSearchMedia(rechmediaCtrl.media).then(function(t){s
						listSearchMedia = t;
						rechmediaCtrl.isLoadedMedia=true;
					});
				}

				
		
				
				rechmediaCtrl.searchMedia=function(){
					rechmediaCtrl.getSearchListResultat();
					rechmediaCtrl.isPageRecherche = false;
				}
				
	})