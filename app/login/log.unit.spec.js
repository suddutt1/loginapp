'use strict';

describe('Testing of loginController', function() {
  var $location,$controller;

  
  beforeEach(module('trivialapp.login'));
  
  
  beforeEach(inject(function(_$controller_,_$location_){
    $controller = _$controller_;
	$location = _$location_;
  }));
  
  it('Should set correct error message on invalid login', function() {
    var $scope = {};
    var ctrl = $controller('loginController', { $scope: $scope });
	$scope.login();
    expect($scope.message).toEqual('Please enter uid/pwd');
  });
  it('Should set correct error message on invalid password', function() {
    var $scope = { uid:'Sudip',pwd:'1234'};
    var ctrl = $controller('loginController', { $scope: $scope });
	$scope.login();
    expect($scope.message).toEqual('Enter correct uid/pwd');
  });
  it('Should navigate to home page on valid user id /password', function() {
    var $scope = { uid:'Sudip',pwd:'zaqwsx'};
    var ctrl = $controller('loginController', { $scope: $scope });
	$scope.login();
	expect($location.path()).toEqual('/home/'+$scope.uid);
  });

});
