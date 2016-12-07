'use strict';

/*
Author: JuanCarlos Chavez
*/


/******************************************************************************************
Upward Bound PRODUCT CONTROLLERS
*******************************************************************************************/
angular.module('services')
.factory('SchoolsService', ['$resource', function($resource) {
	return $resource('http://localhost:8080/schools');
}]);
angular.module('appManager')
.controller('appOverviewManger', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.$root.tab = "overview";
		$scope.title = "Overview";
		$scope.featureView = 'overview';
	}])
.controller('appSchoolsManager', ['$scope', '$http', '$routeParams', '$rootScope', 'SchoolsService',
	function($scope, $http, $routeParams, $rootScope, SchoolsService) {
		$scope.$root.tab = "schools";
		$scope.title = "Schools Module"
		$scope.featureView = 'overview';

		$scope.schoolToBeAdded = "";

		SchoolsService.query(function(response){
			$scope.schools = response;
		});

		$scope.addSchool = function() {
			SchoolsService.save({ name : $scope.schoolToBeAdded }, function(response) {
				$scope.schools.push(response);
				$scope.featureView = "overview";
			});
		}

		$scope.editSchool = function(school) {
			$scope.SchoolToBeEdited = school;
		}

		$scope.updateSchool = function() {
			var updateUrl = 'http://localhost:8080/schools/' + $scope.SchoolToBeEdited.id;
			$http({
				method: 'PUT',
				data: $scope.SchoolToBeEdited,
				url: 'http://localhost:8080/schools/' + $scope.SchoolToBeEdited.id
			});
		}

		$scope.deleteSchool = function(id, index) {
			$http({
				method: 'DELETE',
				url: 'http://localhost:8080/schools/' + id
			}).then(function successCallback(response) {
				$scope.schools.splice(index, 1);
			});
		}
	}])
.controller('appStudentsManager', ['$scope', '$http', '$routeParams', '$rootScope', '$resource', 'SchoolsService',
	function($scope, $http, $rootScope, $routeParams, $resource, SchoolsService) {
		$scope.$root.tab = "students";
		$scope.title = "Students Module"
		$scope.featureView = 'overview';

		$scope.studentToBeAdded = {};

		var studentResource = $resource('http://localhost:8080/students');
		studentResource.query(function(response){
			$scope.students=response;
		});

		SchoolsService.query(function(response) {
			$scope.schools = response;
		});

		$scope.addStudent = function() {
			studentResource.save($scope.studentToBeAdded, function(response){
				$scope.students.push(response);
				$scope.featureView = "overview";
			});
		};

		$scope.editStudent = function(student) {
			$scope.studentToBeEdited = student;
			var classesResource = $resource('http://localhost:8080/classes');
			classesResource.query(function(response){
				$scope.classes = response;
			});
		};

		$scope.studentHasClass = function(value){
			var returnValue = false;
			for(var i = 0; i < value.students.length; i++) {
				if(value.students[i].id === $scope.studentToBeEdited.id){
					returnValue = true;
				}
			}
			return returnValue
		};

		var updateClass = function() {
			$http({
				method: 'PUT',
				data: $scope.classToBeEdited,
				url: 'http://localhost:8080/classes/' + $scope.classToBeEdited.id
			});
		}

		var AddStudentToClass = function(classVal, studentId) {
			for(var i = 0; i < $scope.classes.length; i++) {
				if($scope.classes[i].id === classVal.id){
					$scope.classes[i].students.push({id: studentId});
					$scope.classToBeEdited = $scope.classes[i];
					updateClass();
				}
			}
			$scope.studentToBeEdited.classes.push({id: classVal.id});
		};

		$scope.hasClassToggle = function(classVal, studentId) {
			if($scope.studentHasClass(classVal) === true){
				removeClass(classVal.id);
			} else {
				AddStudentToClass(classVal, studentId);
			}
		};

		var removeClass = function(id){
			for(var i = 0; i<$scope.studentToBeEdited.classes.length; i++) {
				if($scope.studentToBeEdited.classes[i].id === id) {
					$scope.studentToBeEdited.classes.splice(i,1);
				}
			}
			for(var h = 0; h<$scope.classes.length; h++){
				for(var i = 0; i<$scope.classes[h].students.length; i++) {
					if($scope.classes[h].students[i].id === $scope.studentToBeEdited.id && $scope.classes[h].id === id) {
						$scope.classes[h].students.splice(i,1);
						$scope.classToBeEdited = $scope.classes[h];
						updateClass();
					}
				}
			} 
		};

		$scope.updateStudent = function() {
			$http({
				method: 'PUT',
				data: $scope.studentToBeEdited,
				url: 'http://localhost:8080/students/' + $scope.studentToBeEdited.id
			});
		};

		$scope.deleteStudent = function(student, index) {
			SchoolsService.query(function(response) {
				$scope.schools = response;
			});
			for(var i=0; i< $scope.schools.length; i++) {
				var school = $scope.schools[i];
				for(var j=0; j<school.students.length; j++) {
					if(school.students[j].id === student.id){
						school.students.splice(j,1);
						$http({
							method: 'PUT',
							data: school,
							url: 'http://localhost:8080/schools/' + school.id
						}).then(function successCallback(response) {
							$http({
								method: 'DELETE',
								url: 'http://localhost:8080/students/' + student.id
							}).then(function successCallback(response) {
								$scope.students.splice(index, 1);
							});
						});
					}
				}
			}
		};
	}])
.controller('appClassesManager', ['$scope', '$routeParams', '$rootScope', '$resource', '$http', 'SchoolsService',
	function($scope, $rootScope, $routeParams, $resource, $http, SchoolsService) {
		$scope.$root.tab = "classes";
		$scope.title = "Classes Module";
		$scope.featureView = 'overview';

		$scope.classToBeAdded = {};

		SchoolsService.query(function(response) {
			$scope.schools = response;
		});

		var classesResource = $resource('http://localhost:8080/classes');
		classesResource.query(function(response){
			$scope.classes=response;
		});

		$scope.addClass = function() {
			classesResource.save($scope.classToBeAdded, function(response){
				$scope.classes.push(response);
				$scope.featureView = "overview";
				$scope.classToBeAdded = {};
			});
		};

		$scope.editClass = function(studentClass) {
			studentClass.startDate = new Date(studentClass.startDate);
			studentClass.endDate = new Date(studentClass.endDate);
			$scope.classToBeEdited = studentClass;
		}

		$scope.updateClass = function() {
			$http({
				method: 'PUT',
				data: $scope.classToBeEdited,
				url: 'http://localhost:8080/classes/' + $scope.classToBeEdited.id
			});
		}

		$scope.deleteClass = function(id, index) {
			$http({
				method: 'DELETE',
				url: 'http://localhost:8080/classes/' + id
			}).then(function successCallback(response) {
				$scope.classes.splice(index, 1);
			});
		}
	}])
.controller('appTutorsManager', ['$scope', '$http', '$routeParams', '$rootScope', '$resource',
	function($scope, $http, $routeParams, $rootScope, $resource) {
		$scope.$root.tab = "tutors";
		$scope.title = "tutors Module"
		$scope.featureView = 'overview';

		$scope.tutorToBeAdded = "";

		var TutorsResource = $resource('http://localhost:8080/tutors/');
		TutorsResource.query(function(response){
			$scope.tutors = response;
		});

		$scope.addTutor = function() {
			TutorsResource.save($scope.tutorToBeAdded, function(response) {
				$scope.tutors.push(response);
				$scope.featureView = "overview";
			});
		}

		$scope.editTutor = function(tutor) {
			var studentResource = $resource('http://localhost:8080/students');
			studentResource.query(function(response){
				$scope.students = response;
			});
			$scope.TutorToBeEdited = tutor;
		}

		$scope.updateTutor = function() {
			var updateUrl = 'http://localhost:8080/tutors/' + $scope.TutorToBeEdited.id;
			$http({
				method: 'PUT',
				data: $scope.TutorToBeEdited,
				url: 'http://localhost:8080/tutors/' + $scope.TutorToBeEdited.id
			});
		}

		$scope.deleteSchool = function(id, index) {
			$http({
				method: 'DELETE',
				url: 'http://localhost:8080/tutors/' + id
			}).then(function successCallback(response) {
				$scope.tutors.splice(index, 1);
			});
		};
		$scope.tutorHasStudent = function(student){
			var returnStudent = false;
			for(var i = 0; i < student.tutors.length; i++) {
				if(student.tutors[i].id === $scope.TutorToBeEdited.id){
					returnStudent = true;
				}
			}
			return returnStudent;
		}
		$scope.studentToggle = function(student, tutorId) {
			if($scope.tutorHasStudent(student) === true){
				removeStudent(student.id);
			} else {
				AddTutorToStudent(student, tutorId);
			}
		};

		var removeStudent = function(id){
			//remove student from tutor
			for(var i = 0; i<$scope.TutorToBeEdited.students.length; i++) {
				if($scope.TutorToBeEdited.students[i].id === id) {
					$scope.TutorToBeEdited.students.splice(i,1);
				}
			}
			//remove tutor from student
			for(var h = 0; h<$scope.students.length; h++){
				for(var i = 0; i<$scope.students[h].tutors.length; i++) {
					if($scope.students[h].tutors[i].id === $scope.TutorToBeEdited.id && $scope.students[h].id === id) {
						$scope.students[h].tutors.splice(i,1);
						$scope.studentToBeEdited = $scope.students[h];
						updateStudent();
					}
				}
			} 
		};

		var updateStudent = function() {
			$http({
				method: 'PUT',
				data: $scope.studentToBeEdited,
				url: 'http://localhost:8080/student/' + $scope.studentToBeEdited.id
			});
		}

		var AddTutorToStudent = function(student, tutorId) {
			for(var i = 0; i < $scope.students.length; i++) {
				if($scope.students[i].id === student.id){
					$scope.students[i].tutors.push({id: tutorId});
					$scope.studentToBeEdited = $scope.students[i];
					updateStudent();
				}
			}
			$scope.TutorToBeEdited.students.push({id: student.id});
		};
	}])
.controller('appClocktimeManager', ['$scope', '$routeParams', '$rootScope', '$resource', '$http', '$timeout',
	function($scope, $rootScope, $routeParams, $resource, $http, $timeout) {
		$scope.$root.tab = "clocktime";
		$scope.title = "Clock Time Module";
		$scope.featureView = 'overview';

		var tutorResource = $resource('http://localhost:8080/tutors');
		tutorResource.query(function(response){
			$scope.tutors=response;
		});
		$scope.selectedTutor = {};
		$scope.displayedStudents = [];
		$scope.displayedTutorDates = [];
		$scope.tutorDateToBeAdded = {};
		$scope.currentTutorSessions = [];

		/*$scope.hasTutorSession = function(student){
			console.log(student)
			return student.displayedTutorDates;
		};*/
		$scope.searchTutorDates = function(){
			$scope.displayedTutorDates =[];
			$scope.displayedStudents = [];
			$scope.currentTutorSessions = [];
			for(var i=0; i<$scope.selectedTutor.tutorDates.length; i++) {
				var id =  $scope.selectedTutor.tutorDates[i].id
				$http({
					method: 'GET',
					url: 'http://localhost:8080/tutorDates/' + id
					}).then(function successCallback(response) {
						$scope.displayedTutorDates.push(response.data);
				});
			}
		};

		$scope.searchStudents = function(tutorDate) {
			$scope.displayedTutorDates = [];
			var tempStudents = [];
			$scope.selectedTutorDate = tutorDate;
			if($scope.selectedTutorDate.tutorSessions){
				for(var i=0; i<$scope.selectedTutorDate.tutorSessions.length; i++) {
					$http({
						method: 'GET',
						url: 'http://localhost:8080/tutorSession/' + $scope.selectedTutorDate.tutorSessions[i].id
						}).then(function successCallback(response) {
							$scope.currentTutorSessions.push(response.data);
						}
					);
				}
			}
			for(var i=0; i<$scope.selectedTutor.students.length; i++) {
				var id =  $scope.selectedTutor.students[i].id
				$http({
					method: 'GET',
					url: 'http://localhost:8080/students/' + id
					}).then(function successCallback(response) {
						tempStudents.push(response.data);
					}
				);
			}
			$timeout(function() {
				$scope.displayedStudents = [];
				var tempStudentsCopy = tempStudents;
				$scope.currentTutorSessions.forEach(tutorSession => {
					for(var i=0; i<tempStudents.length; i++) {
						var student = tempStudents[i];
						student.tutorSessions.forEach(studentSession => {
							if(studentSession.id === tutorSession.id) {
								student.displayTutorSessions = tutorSession;
								$scope.displayedStudents.push(student);
								tempStudentsCopy.splice(i, 1);
							}
						})
					}
				});
				tempStudentsCopy.forEach(student => $scope.displayedStudents.push(student));
			}, 1500);
		};

		$scope.addTutorDate = function(){
			$scope.tutorDateToBeAdded.tutor = {id: $scope.selectedTutor.id};
			var tutorDateResource = $resource('http://localhost:8080/tutorDates');
			tutorDateResource.save($scope.tutorDateToBeAdded, function(response) {
				$scope.displayedTutorDates.push(response);
			});
		};

		$scope.addTutorSession = function(attendance, student, tutorDate){
			console.log(attendance, student, tutorDate);
			var tutorSessionResource = $resource('http://localhost:8080/tutorsessions');
			tutorSessionResource.save({date: new Date(), attended: attendance}, function(response) {
				console.log(response);
				student.tutorSessions.push({id: response.id});
				if(!tutorDate.tutorSessions) { tutorDate.tutorSessions = [] }
				tutorDate.tutorSessions.push({id: response.id});
				$http({
					method: 'PUT',
					data: tutorDate,
					url: 'http://localhost:8080/tutorDates/' + tutorDate.id
				}).then(function successCallback(response) {
					$scope.selectedTutorDate = response;
					$http({
						method: 'PUT',
						data: student,
						url: 'http://localhost:8080/students/' + student.id
					}).then(function successCallback(response) {
						/*for(var i = 0; i<displayedStudents; i++) {
							if(displayedStudents[i].id == re)
						}*/
						$scope.searchStudents(tutorDate);
					});
				});
			});
		};
	}])
.controller('appMealsManager', ['$scope', '$routeParams', '$rootScope',
	function($scope, $rootScope, $routeParams) {
		$scope.$root.tab = "meals";
		$scope.title = "Meals Module";
		$scope.featureView = 'overview';
	}]);