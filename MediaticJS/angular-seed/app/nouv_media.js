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
			function(serviceMediaGET,typeOptions,$rootScope,$location){
				var nouvmediaCtrl = this;
		
				$rootScope.pageTitle="Nouveau Media";
				
				nouvmediaCtrl.addMedia=function(){
					serviceMediaGET.addMedia(nouvmediaCtrl.media);
					console.log("ajouter");
					$location="fiche_media.html";
				}
		
				nouvmediaCtrl.listmedia=function(){
					return serviceMediaGET.getlistMedia();
				}
				
				nouvmediaCtrl.listselect = typeOptions.list;
		
	})