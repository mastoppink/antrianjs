app.controller('welcomeCtrl', function($scope, $http, $location){
	
	$scope.clickLoket = function(showItem){
		$scope.showMonitor = false;
		$scope.showLoket = showItem;
	}

	$scope.clickMonitor = function(showItems){
		$scope.showLoket = false;
		$scope.showMonitor = showItems;
	}

	$scope.goLoket = function ( ) {
		$location.path('/loket');
	};

	$scope.goMonitor = function ( ) {
		$location.path('/monitor');
	};
	$scope.go = function(href){
		$location.path(href);
	}
});