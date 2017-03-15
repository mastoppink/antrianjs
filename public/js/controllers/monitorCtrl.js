app.controller('monitorCtrl', function($scope, $routeParams, socket){
	$scope.option = {
		loop: true
	}

	$scope.$on('vjsVideoReady', function(e, data){
		// data contain : id, player, and controlbar
		var player = data.player;
		player.volume(0.6);
	});

	$scope.test = [{nama: 'muji hartanto'}, {nama: 'muji hartanto'}, {nama: 'muji hartanto'}, {nama: 'muji hartanto'}];
});