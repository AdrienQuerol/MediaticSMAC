"use strict";

angular.module('app.media.nouv',[])
	.config(function($routeProvider,$httpProvider) {

			$routeProvider.when('/nouveau_media', {
				templateUrl : 'view_media/nouveau_media.html',
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
					nouvmediaCtrl.media = {};
					// A MODIF POUR REDIRIGER VERS LA FICHE DU MEDIA AJOUTE
					//$location.url("/fiche_media/:nouvmediaCtrl.media.id");
				}
		
				nouvmediaCtrl.listmedia=function(){
					return serviceMedia.getlistMedia();
				}
				
				nouvmediaCtrl.listselect = typeOptions.list;
		
	})