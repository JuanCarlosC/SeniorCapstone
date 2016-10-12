'use strict';

/*
Author: JuanCarlos Chavez
*/


/******************************************************************************************
Upward Bound PRODUCT CONTROLLERS
*******************************************************************************************/
var appManager = angular.module('appManager', []);


appManager.controller('appOverviewManger', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.$root.tab = "overview";
		$scope.title = "Overview";
		$scope.featureView = 'data';
	}]);
appManager.controller('appStudentsManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.$root.tab = "students";
		$scope.title = "Students Module"
		$scope.featureView = 'overview';

		$scope.students = [{
			'firstName': 'John',
			'lastName': 'Gravokiean',
			'gradeLevel': 'Senior',
			'mentor': 'Jamie',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Luis',
			'lastName': 'Chamaco',
			'gradeLevel': 'Freshman',
			'mentor': 'Louis',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Korina',
			'lastName': 'Perez',
			'gradeLevel': 'Sophmore',
			'mentor': 'Josh',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Shanique',
			'lastName': 'Doe',
			'gradeLevel': 'Senior',
			'mentor': 'Abbey',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'John',
			'lastName': 'Gravokiean',
			'gradeLevel': 'Senior',
			'mentor': 'Jamie',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Luis',
			'lastName': 'Chamaco',
			'gradeLevel': 'Freshman',
			'mentor': 'Louis',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Korina',
			'lastName': 'Perez',
			'gradeLevel': 'Sophmore',
			'mentor': 'Josh',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Shanique',
			'lastName': 'Doe',
			'gradeLevel': 'Senior',
			'mentor': 'Abbey',
			'profilePic': 'assets/imgs/profilepic.png'
		},];

	}]);
appManager.controller('appClassesManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.$root.tab = "classes";
		$scope.title = "Classes Module";
		$scope.featureView = 'overview';
	}]);
appManager.controller('appClocktimeManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.$root.tab = "clocktime";
		$scope.title = "Clock Time Module";
		$scope.featureView = 'overview';
		$scope.students = [{
			'firstName': 'John',
			'lastName': 'Gravokiean',
			'gradeLevel': 'Senior',
			'mentor': 'Jamie',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Luis',
			'lastName': 'Chamaco',
			'gradeLevel': 'Freshman',
			'mentor': 'Louis',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Korina',
			'lastName': 'Perez',
			'gradeLevel': 'Sophmore',
			'mentor': 'Josh',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Shanique',
			'lastName': 'Doe',
			'gradeLevel': 'Senior',
			'mentor': 'Abbey',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'John',
			'lastName': 'Gravokiean',
			'gradeLevel': 'Senior',
			'mentor': 'Jamie',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Luis',
			'lastName': 'Chamaco',
			'gradeLevel': 'Freshman',
			'mentor': 'Louis',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Korina',
			'lastName': 'Perez',
			'gradeLevel': 'Sophmore',
			'mentor': 'Josh',
			'profilePic': 'assets/imgs/profilepic.png'
		}, {
			'firstName': 'Shanique',
			'lastName': 'Doe',
			'gradeLevel': 'Senior',
			'mentor': 'Abbey',
			'profilePic': 'assets/imgs/profilepic.png'
		},];
	}]);
appManager.controller('appMealsManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.$root.tab = "meals";
		$scope.title = "Meals Module";
		$scope.featureView = 'overview';
	}]);