app.controller('loketCtrl', function($scope, socket){
	var isi = {
		nama: "muji hartanto",
		alamat: "entahlah"
	};

	$scope.test=function(){
		socket.emit('sebarkan', {content: isi, for: "dispenser"});
	}

});