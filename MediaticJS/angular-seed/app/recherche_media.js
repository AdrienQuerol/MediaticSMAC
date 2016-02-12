"use strict";

angular.module('app.media.rech',[])
	.config(function($routeProvider) {

			$routeProvider.when('/recherche_media', {
				templateUrl : 'recherche_media.html',
				controller : 'RechMediaController',
				controllerAs : 'rechmediaCtrl'
			});

		})
	.controller('RechMediaController',
			function(serviceMedia,typeOptions,$rootScope){
				var rechmediaCtrl = this;
		
				$rootScope.pageTitle="Recherche Media";
		
				rechmediaCtrl.listmedia=function(){
					return serviceMedia.getlistMedia();
				}
				
				rechmediaCtrl.listselect = typeOptions.list;
				
				
				rechmediaCtrl.searchMedia=function(){
					return serviceMedia.getSearchMedia(rechmediaCtrl.media);
				}
		
	})