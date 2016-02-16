angular.module('ServiceAdherent', [])

.factory('servAdh', function($http) {
//	var url = 'http://192.168.1.14:8080/resource/adherent.recherche';
//	var promise = $http.get(url).then(function(response) {
//		return response.data;
//	});
	var urlrech = 'http://192.168.1.14:8080/resource/adherent.recherche';
	var urlmodif = 'http://192.168.1.14:8080/resource/adherent.modification';
	var urlgetaccession="http://192.168.1.14:8080/resource/adherent.accession";
	var urlcrea = 'http://192.168.1.14:8080/resource/adherent.creation';
	
	return {
		rows : [],
		addAdherent : function(adherent) {			
			$http.post(urlcrea, {params:{nom:adherent.nom, id:adherent.id}}).then(function(response) {});
			return this.getList();			
		},
		
		modifAdherent : function(adherent) {			
			$http.post(urlmodif,adherent).then(function(response) {});
			return this.getList();			
		},
		
		//adherent = {nom, prenom }
		getList : function() {			
			return $http.get(urlrech).then(function(response) {
				return response.data;
			});
		},
		rechAdherent : function(adherent) {
			return $http.get(urlrech, {params:{nom:adherent.nom, id:adherent.id}}).then(function(response) {
				return response.data;
			});
			
		},
		
		getAdherent: function(idAdh){			
			var adherentPromise = $http
					.get(urlgetaccession, {params: {id: idAdh}})
					.then(function(response){return response.data;});
			return adherentPromise
		},
		
		
		

	};
	
})

.provider(
		'cartAdh', {
			$get : function() {
				var provider = this;
				return {
					motCle:{},
					setMotCle : function(adherent) {
						this.motCle = adherent;
						}

					}
				}

			
			
		})
