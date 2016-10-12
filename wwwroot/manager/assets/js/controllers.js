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
		$scope.classes = [{
			'name': 'Intro to Comp Sci',
			'subject': 'information science',
			'instructor': 'Dr. Reed',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'AP Geography',
			'subject': 'geography',
			'instructor': 'Mr. Mack',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'AP English',
			'subject': 'english',
			'instructor': 'Mr. Johnson',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'Algebra I',
			'subject': 'math',
			'instructor': 'Mr. Jagermenjenson',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		}, {
			'name': 'Intro to Comp Sci',
			'subject': 'information science',
			'instructor': 'Dr. Reed',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'AP Geography',
			'subject': 'geography',
			'instructor': 'Mr. Mack',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'AP English',
			'subject': 'english',
			'instructor': 'Mr. Johnson',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'Algebra I',
			'subject': 'math',
			'instructor': 'Mr. Jagermenjenson',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		}];
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

		/* 
		static hasMany = [students:Student]
    String name
    String subject
    String instructor
    Date startDate
    Date endDate
		*/

		$scope.classes = [{
			'name': 'Intro to Comp Sci',
			'subject': 'information science',
			'instructor': 'Dr. Reed',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'AP Geography',
			'subject': 'geography',
			'instructor': 'Mr. Mack',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'AP English',
			'subject': 'english',
			'instructor': 'Mr. Johnson',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'Algebra I',
			'subject': 'math',
			'instructor': 'Mr. Jagermenjenson',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		}, {
			'name': 'Intro to Comp Sci',
			'subject': 'information science',
			'instructor': 'Dr. Reed',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'AP Geography',
			'subject': 'geography',
			'instructor': 'Mr. Mack',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'AP English',
			'subject': 'english',
			'instructor': 'Mr. Johnson',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		},{
			'name': 'Algebra I',
			'subject': 'math',
			'instructor': 'Mr. Jagermenjenson',
			'startDate': 'Wednesday, August 17, 2016',
			'endDate': 'Friday, December 14, 2016'
		}];


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