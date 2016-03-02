"use strict";

angular.module('app.services.medias',[])
		.factory('serviceMedia',function($http){
			
			var racineWebServices = "http://localhost:8080/api";
			var racineMedias = racineWebServices + "/medias";

			var urlgetaccession=racineMedias;
			var urlgetrecherche=racineMedias + '/search';
			var urlpostmodif=racineMedias;
			var urlpostcreation=racineMedias;
			
			
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
					var promesseResultat =
							$http
							.post(urlpostmodif,media)
							.then(function (reponse) { return reponse.data;	});
					this.listmedia=null;
					return promesseResultat;
				},

				getMedia: function(idMedia){
					var mediaPromise = $http
							.get(urlgetaccession + '/' + idMedia)
							.then(function(response){
								return response.data;
							});
					return mediaPromise
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
	
	
	
	
	
	
	
	
	
	
	
	
	