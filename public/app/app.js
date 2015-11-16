var app = angular.module('app', ['ngRoute', 'ngResource', 'ngCookies']);

app.config(function($routeProvider, $locationProvider){
   $locationProvider.html5Mode(true);
   $routeProvider
		.when('/preclassement', { templateUrl: '/partials/preclassement', controller: 'prerankingController'})
		.when('/parties', { templateUrl: '/partials/parties'})
		.when('/horaire', { templateUrl: '/partials/horaire', controller: 'scheduleController'})
		.when('/resultats', { templateUrl: '/partials/resultats'});
		/*.when('/preclassement', { templateUrl: '/partials/preclassement', controller:'mainController'});*/
});