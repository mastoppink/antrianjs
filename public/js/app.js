var app = angular.module('AntrianJS', ['ngRoute', 'ngResource', 'vjs.video']);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$locationProvider.html5Mode({
			enabled : true
		});
		$routeProvider.
		when('/admin', {
			templateUrl: 'partials/admin',
			controller: 'adminCtrl'
		}).
		when('/monitor', {
			templateUrl: 'partials/monitor',
			controller: 'monitorCtrl'
		}).
		when('/monitor/:idmonitor', {
			templateUrl: 'partials/monitor',
			controller: 'monitorCtrl'
		}).
		when('/loket', {
			templateUrl: 'partials/loket',
			controller: 'loketCtrl'
		}).
		when('/loket/:idloket', {
			templateUrl: 'partials/loket',
			controller: 'loketCtrl'
		}).
		when('/dispenser', {
			templateUrl: 'partials/dispenser',
			controller: 'dispenserCtrl'
		}).
		when('/welcome', {
			templateUrl: 'partials/welcome',
			controller: 'welcomeCtrl'
		}).
		otherwise({
			redirectTo: '/welcome'
		});
	}
])