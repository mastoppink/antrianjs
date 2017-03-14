app.controller('monitorCtrl', function($scope, $routeParams, socket){
	$scope.kecilkan = function(){
		myPlayer.setVolume(0.5);
	}

});