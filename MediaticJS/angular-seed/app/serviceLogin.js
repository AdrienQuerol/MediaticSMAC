angular.module('ServiceLogin', [])

.factory('servLogin', function($http) {


	return {
		verifLogin : function(log) {
			var url = 'http://192.168.1.14:8080/resource/connexion.login';
			$http.post(url, log).then(function(response) {});						
		}		
		
		

	};
})