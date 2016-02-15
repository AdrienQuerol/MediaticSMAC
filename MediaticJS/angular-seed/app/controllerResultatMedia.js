"use strict";

angular.module('app.media.resultat',[])
	.config(function($routeProvider,$httpProvider) {

			$routeProvider.when('/resultat_media', {
				templateUrl : 'resultat_media.html',
				controller : 'ResMediaController',
				controllerAs : 'resmediaCtrl'
			});

			})
	.controller('ResMediaController',
			function(serviceMedia,typeOptions,$rootScope,serviceEmprunts){
				var resmediaCtrl = this;
		
				$rootScope.pageTitle="Resultat Media";
				
				
				resmediaCtrl.listselect = typeOptions.list;
				
				// recuperation du tableau media 
				var listSearchMedia=[];
				resmediaCtrl.isLoadedMedia=false;
				
				resmediaCtrl.getlistsearch = function(){
					return listSearchMedia;
				};
				
				resmediaCtrl.media={};
				
				
				resmediaCtrl.searchMedia=function(){
					return serviceMedia.getSearchMedia(resmediaCtrl.media).then(function(t){
						listSearchMedia = t;
						resmediaCtrl.isLoadedMedia=true;
					});
				}

				
	})