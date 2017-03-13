app.controller('dispenserCtrl', function($scope, $http, socket){
	socket.on('dispenser', function(data){
		alert(data.alamat);
	});
});