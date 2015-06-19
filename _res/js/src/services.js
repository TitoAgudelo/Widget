'use strict';

/* Services */

var services = angular.module('widgets.services', []);

services.factory('dataFactory', ['$http', function ($http) {
    var JsonList = 'stubs/menu.json';
    var dataFactory = {};

    return dataFactory;
}]);