var preclassementCtrl = app.controller('prerankingController', function($scope, $rootScope, $http, $location, $cookieStore){
   
   console.log("Creating PreclassementCtrl");
   
   var cookie_currentTournament = $cookieStore.get('currentTournament');
   
   if(cookie_currentTournament){
      $scope.currentTournament = cookie_currentTournament;
      console.log("Favorite cookie valid");
   }
   else{
      console.log("Favorite cookie not valid");
   }
   
   var unbind = $rootScope.$on('tournamentChange', function(event, data){
      
      $scope.currentTournament = data;
   });
   
   $scope.$on('$destroy', unbind);
});