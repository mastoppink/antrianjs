app.controller('loketCtrl', function($scope, socket){
	$scope.showCustomPanggil = function(){
		if($scope.showCustom === true){
			$scope.showCustom = false;
		}else{
			$scope.showCustom = true;
		}
	}
});