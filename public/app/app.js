var app = angular.module('app', ['ngRoute', 'ngResource']);

app.controller('mainController', function($scope, $http, $location){
    this.isFullyLoaded = function(){
        return true;
    }
    
    $scope.message = "Hello Angular!";
    this.isSelected = function(){
        return false;
    }
    
    
});

app.config(function($routeProvider, $locationProvider){
   
   $locationProvider.html5Mode(true);
   $routeProvider
		.when('/', { templateUrl: '/partials/main', controller:'mainController'});
    
});
