angular.module('ServiceLogin', [])

.factory('servLogin', function($http) {


	return {
		verifLogin : function(log) {
			var racineWebServices = 'http://localhost:8080/api';
			var url = racineWebServices + '/authenticate';
			$http.post(url, log).then(function(response) {});						
		}		
		
		

	};
})