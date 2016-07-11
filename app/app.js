'use strict' ;

var app = angular.module('trivialapp',['ngRoute','trivialapp.login','trivialapp.home']);

app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/login',
				{
						templateUrl: 'login/login.html',
        				controller: 'loginController'
				}).
			otherwise({
				redirectTo : '/login'
			});
}]);

