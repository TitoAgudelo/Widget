'use strict';

/* Controllers */

var ctrls = angular.module('widgets.controllers', []);


ctrls.controller('WidgetsCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
	}
]);

ctrls.controller('GraphCtrl', ['$scope', '$routeParams', '$location',
	function($scope, $routeParams, $location) {
		$scope.isActive = function (viewLocation) { 
	        if ("/diagrama" == viewLocation){
	        	$scope.viewTab = false;
	        } else if("/mount" == viewLocation) {
	        	$scope.viewTab = true;
	        }
	        return viewLocation === $location.url();

	    };
	}
]);

