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
			
			$rootScope.changeLanguage = function (lan){
				$rootScope.langu = lan;
				app.run();
			};

			if ($rootScope.langu == "es") {
				// json english and	default	
				var jsonListMenu = 'stubs/menues.json',
				jsonProfile = 'stubs/profilees.json',
				jsonLocation = 'stubs/locationes.json',
				jsonData = 'stubs/dataTransferes.json',
				jsonCategory = 'stubs/categoryes.json',
				jsonDropdown = 'stubs/dropdown.json';
				$rootScope.languages = true;
			} else {
				// json english and	default	
				var jsonListMenu = 'stubs/menu.json',
				jsonProfile = 'stubs/profile.json',
				jsonLocation = 'stubs/location.json',
				jsonData = 'stubs/dataTransfer.json',
				jsonCategory = 'stubs/category.json',
				jsonDropdown = 'stubs/dropdown.json';
				$rootScope.languages = false;
			}
			

			$http.get(jsonListMenu).success(function(data){
				$rootScope.items = data;
			});

			$http.get(jsonProfile).success(function(data){
				$rootScope.profiles = data;
			});

			$http.get(jsonLocation).success(function(data){
				$rootScope.locations = data;
			});

			$http.get(jsonData).success(function(data){
				$rootScope.diagrams = data;
			});

			$http.get(jsonCategory).success(function(data){
				$rootScope.categories = data;
			});

			$http.get(jsonDropdown).success(function(data){
				$rootScope.dropdowns = data;
			});

			
		}
	]);
