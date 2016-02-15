"use strict";

angular.module('app.services.medias',[])
		.factory('serviceMedia',function($http){
			
			var urlgetrecherche="http://192.168.1.14:8080/resource/media.recherche";
			var urlpostmodif="http://192.168.1.14:8080/resource/media.modification";
			var urlpostcreation="http://192.168.1.14:8080/resource/media.creation";
			
			
			return {
				listmedia:null,
				listsearch:[],
				getListMedia: function(){
					if(this.listmedia==null)
						return  this.listmedia = $http.get(urlgetrecherche).then(function(response){
							return response.data;
						});
					else
						return  this.listmedia;
				},
				getSearchMedia: function(searchMedia){
					console.log(searchMedia);
				
					this.listsearch=$http.get(urlgetrecherche,{params:{titre:searchMedia.titre,auteur:searchMedia.auteur,type:searchMedia.type}})
											.then(function(response){
												return response.data;
											});

					return this.listsearch.then(function(value){
						return value;
					})
				},
				
				
				
				updateListMedia:function(media){
					$http.post(urlpostmodif,media).success(function(data,status){
						console.log(data);
					});
					this.listmedia=null;
					return this.getListMedia();
					
					
				},
				
				  
				addMedia: function(media){
					var mediamodif;
					console.log(media);
					this.listmedia=null;
					return $http.post(urlpostcreation,media).success(function(data,status){
						console.log(data);
						mediamodif=data;
					});
					
				
				}
				
			};
		})
		
		.factory('typeOptions',function(){
			var list=['DVD',
					 'CD',
					  'Livre'
					];
		return {
			list: list
		}	
	})
	
	
	.provider(
		'cartMedia', {
			$get : function() {
				var provider = this;
				return {
					motCle:{},
					setMotCle : function(media) {
						this.motCle = media;
						}

					}
				}

			
			
		})
	
	
	
	
	
	
	
	
	
	
	
	
	