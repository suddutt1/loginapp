'user strict' ;

var loginModule = angular.module("trivialapp.login", ['ngRoute']);
loginModule.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/home/:uid',
				{
						templateUrl: 'home/home.html',
        				controller: 'homeController'
				}).
			otherwise({
				redirectTo : '/login'
			});
}]);
loginModule.controller('loginController',['$scope','$location',
	function($scope,$location){
		//console.log('Initialized controller');
		$scope.message="";
		$scope.login=function(){
				
				if($scope.uid == null || $scope.pwd == null ||$scope.uid=='' || $scope.pwd =='')
				{
					//console.log('Clicked');
					$scope.message='Please enter uid/pwd';
				}
				else if($scope.uid.length>0 && $scope.pwd =="zaqwsx")
				{
					//Go to home page
					//console.log('Going to home page');
					$location.path('/home/'+$scope.uid);
				}
				else
				{
					$scope.message='Enter correct uid/pwd';
				}
		};
	}//End of controller body
]);//End of loginController

