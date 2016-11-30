'use strict';
angular.module('appManager',[]);
angular.module('services',[]);
var app = angular.module('app', [
	'ngRoute',
	"ngResource",
	'appManager',
	'services'
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
				controller: 'appStudentsManager',

			}).
			when('/schools', {
				templateUrl: 'assets/templates/schools.html',
				controller: 'appSchoolsManager',

			}).
			when('/meals', {
				templateUrl: 'assets/templates/meals.html',
				controller: 'appMealsManager',
			}).
			when('/classes', {
				templateUrl: 'assets/templates/classes.html',
				controller: 'appClassesManager'
			}).
			when('/tutors', {
				templateUrl: 'assets/templates/tutors.html',
				controller: 'appTutorsManager'
			}).
			otherwise({
				redirectTo:'/'
			});
	}]);