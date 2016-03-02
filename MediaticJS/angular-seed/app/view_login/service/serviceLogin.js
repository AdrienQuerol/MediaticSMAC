angular.module('ServiceLogin', [])

.factory('servLogin', function($http) {


	return {
		verifLogin : function(log) {
			var racineWebServices = 'http://localhost:8080/api';
			var url = racineWebServices + '/authenticate';
//			$http.post(url, log).then(function(response) {});	
			
			$http({
			    method: 'POST',
			    url: url,
			    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			    transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
			    },
			    data: log
			}).success(function () {});
			
		}		
		
		

	};
})