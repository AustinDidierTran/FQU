var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider){
   $locationProvider.html5Mode(true);
   $routeProvider
		.when('/preclassement', { templateUrl: '/partials/preclassement'})
		.when('/parties', { templateUrl: '/partials/parties', controller:'preclassementController'})
		.when('/horaire', { templateUrl: '/partials/horaire', controller:'preclassementController'})
		.when('/resultats', { templateUrl: '/partials/resultats', controller:'preclassementController'});
		
		/*.when('/preclassement', { templateUrl: '/partials/preclassement', controller:'mainController'});*/
});