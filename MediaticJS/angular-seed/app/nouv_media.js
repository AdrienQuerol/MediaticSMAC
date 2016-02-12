"use strict";

angular.module('app.media.nouv',[])
	.config(function($routeProvider,$httpProvider) {

			$routeProvider.when('/nouveau_media', {
				templateUrl : 'nouveau_media.html',
				controller : 'NouvMediaController',
				controllerAs : 'nouvmediaCtrl'
			});

			})
	.controller('NouvMediaController',
			function(serviceMedia,typeOptions,$rootScope,$location){
				var nouvmediaCtrl = this;
		
				$rootScope.pageTitle="Nouveau Media";
				
				nouvmediaCtrl.addMedia=function(){
					serviceMedia.addMedia(nouvmediaCtrl.media);
					console.log("ajouter");
					$location.url("/fiche_media");
				}
		
				nouvmediaCtrl.listmedia=function(){
					return serviceMedia.getlistMedia();
				}
				
				nouvmediaCtrl.listselect = typeOptions.list;
		
	})