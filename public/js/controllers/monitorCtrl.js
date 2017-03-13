app.controller('monitorCtrl', function($scope, $routeParams, socket){
	socket.on('monitor', function(data){
		alert(data.nama);
	});

	$scope.testangka = data_panggil('405', '1', '2');
	panggil_antrian(data_panggil('405', '1', '2'));
});