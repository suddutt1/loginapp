'use strict' ;

var homeModule = angular.module('trivialapp.home', ['ngRoute']);
homeModule.config(['$routeProvider', function($routeProvider) {
		
}]);
homeModule.controller('homeController',['$scope','$location','$routeParams',
	function($scope,$location,$routeParams){
	
		$scope.message="Welcome " + $routeParams.uid ;
	}//End of controller body
]);//End of loginController