angular.module('ServiceAdherent', [])

.factory('servAdh', function($http) {
//	var url = 'http://192.168.1.14:8080/resource/adherent.recherche';
//	var promise = $http.get(url).then(function(response) {
//		return response.data;
//	});

	return {
		rows : [],
		addAdherent : function(adherent) {
			var url = 'http://192.168.1.14:8080/resource/adherent.creation';
			$http.post(url, {params:{nom:adherent.nom, id:adherent.id}}).then(function(response) {});
			return this.getList();			
		},
		
		modifAdherent : function(adherent) {
			var url = 'http://192.168.1.14:8080/resource/adherent.modification';
			$http.post(url,adherent).then(function(response) {});
			return this.getList();			
		},
		
		//adherent = {nom, prenom }
		getList : function() {
			var url = 'http://192.168.1.14:8080/resource/adherent.recherche';
			return $http.get(url).then(function(response) {
				return response.data;
			});
		},
		rechAdherent : function(adherent) {
			var url = 'http://192.168.1.14:8080/resource/adherent.recherche';
			return $http.get(url, {params:{nom:adherent.nom, id:adherent.id}}).then(function(response) {
				return response.data;
			});
			
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
