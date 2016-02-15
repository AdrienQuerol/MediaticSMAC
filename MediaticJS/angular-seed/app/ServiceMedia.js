"use strict";

angular.module('app.services.medias',[])
		.factory('serviceMedia',function($http){
			
			var urlgetaccession="http://192.168.1.14:8080/resource/media.accession";
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
					var promesseResultat =
							$http
							.post(urlpostmodif,media)
							.then(function (reponse) { return reponse.data;	});
					this.listmedia=null;
					return promesseResultat;
				},

				getMedia: function(idMedia){
					var mediaPromise = $http
							.get(urlgetaccession, {params: {id: idMedia}})
							.then(function(response){return response.data;});
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	