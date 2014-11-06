var tempApp = angular.module('tempApp', ['ngRoute']);

tempApp.config(function($routeProvider) {
	$routeProvider.when('/current', {
		templateUrl: 'partials/current.html',
		controller: 'CurrentCtrl'
	});
	$routeProvider.when('/history', {
		templateUrl: 'partials/history.html',
		controller: 'HistoryCtrl'
	});
	$routeProvider.otherwise({redirectTo:'/current'});
});

tempApp.filter('plusFifteen', function(){
	return function(arrTemp){
		var arrReturn = new Array();
		angular.forEach(arrTemp, function(value, key){
			if(value.temp>=15) arrReturn.push(value);
		});
		return arrReturn;
	}
});