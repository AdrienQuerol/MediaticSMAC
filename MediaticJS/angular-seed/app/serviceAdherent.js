angular.module('ServiceAdherent', [])

.factory('servAdh', function($http,$filter) {
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
			return $http.post(urlcrea, adherent).then(function(response) {});
						
		},
		
		modifAdherent : function(adherent) {	
			var adh = angular.copy(adherent);
			adh.date_naissance = $filter('date')(adh.date_naissance, "MM-dd-yyyy HH:mm:ss.sss");
			if(adh.cotisation_correcte){
				adh.cotisation.debut = $filter('date')(adh.cotisation.debut, "MM-dd-yyyy HH:mm:ss.sss");
				adh.cotisation.fin = $filter('date')(adh.cotisation.fin, "MM-dd-yyyy HH:mm:ss.sss");
			}
			$http.post(urlmodif,adh).then(function(response) {});
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
				console.log("serv");
				return response.data;
			});
			
		},
		
		getAdherent: function(idAdh){			
			var adherentPromise = $http
					.get(urlgetaccession, {params: {id: idAdh}})
					.then(function(response){
						response.data.date_naissance = new Date(response.data.date_naissance);
						if(response.data.cotisation_correcte){
							response.data.cotisation.debut = new Date(response.data.cotisation.debut);
							response.data.cotisation.fin = new Date(response.data.cotisation.fin);
						}
						return response.data;
						
					
					});
			
			
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
