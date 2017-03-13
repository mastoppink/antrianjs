app.controller('welcomeCtrl', function($scope, $http){
	$http.get('/admin').
	then(function(data, status, headers, config){
		
	},
	function(data, status, headers, config){

	});
});