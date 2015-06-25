'use strict';

/* Controllers */

var ctrls = angular.module('widgets.controllers', []);


ctrls.controller('WidgetsCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
	}
]);

ctrls.controller('GraphCtrl', ['$scope', '$routeParams', '$location',
	function($scope, $routeParams, $location) {
		
		$scope.viewTab =  true;
    	$scope.tab = true;


		$scope.isActive = function (viewLocation) { 
	        if ("#diagrama" == viewLocation){
	        	$scope.viewTab = true;
	        	$scope.tab = true;
	        } else if("#month" == viewLocation) {
	        	$scope.viewTab = false;
	        	$scope.tab = false;
	        }
	        return viewLocation === $location.url();
	    };
	}
]);

