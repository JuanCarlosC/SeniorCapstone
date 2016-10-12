'use strict';

var app = angular.module('app', [
	'ngRoute',
	'appManager'
]);

angular.module('datepickerBasicUsage',
    ['ngMaterial', 'ngMessages']).controller('AppCtrl', function($scope) {
  $scope.myDate = new Date();

  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());

  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  };
});

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