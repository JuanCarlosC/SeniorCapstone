'use strict';

var app = angular.module('app', [
	'ngRoute',
	'appManager'
]);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'assets/templates/overview.html',
				controller: 'appOverviewManger'
			}).
			when('/clocktime', {
				templateUrl: 'assets/templates/clocktime.html',
				controller: 'appClocktimeManager'
			}).
			when('/students', {
				templateUrl: 'assets/templates/students.html',
				controller: 'appStudentsManager'
			}).
			when('/meals', {
				templateUrl: 'assets/templates/meals.html',
				controller: 'appMealsManager'
			}).
			when('/classes', {
				templateUrl: 'assets/templates/classes.html',
				controller: 'appClassesManager'
			}).
			otherwise({
				redirectTo:'/'
			});
	}]);