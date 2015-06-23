"use strict";

var app = angular.module('widgets', [
		'ngRoute',
		'widgets.controllers',
		'widgets.services'
	]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {
			controller: "WidgetsCtrl",
			templateUrl: "/partials/widgets.html"
		})
    	.otherwise({
    		redirectTo: "/"
    	});

    $locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);

app.run(['$rootScope', '$http',
	function($rootScope, $http) {
			var jsonListMenu = 'stubs/menu.json',
				jsonProfile = 'stubs/profile.json';

			$http.get(jsonListMenu).success(function(data){
				$rootScope.items = data;
			});

			$http.get(jsonProfile).success(function(data){
				$rootScope.profiles = data;
			});
		}
	]);
