var headerCtrl = app.controller('headerController', function($scope, $rootScope, $http, $location, $route, $cookieStore){
    
    $http.get($location.path + '/../JSON/tournaments.json').success(function(data) {
	    $scope.tournaments = data;
		console.log(data);
    }).then(function(){
        $scope.currentTournament = $scope.tournaments[0];
    });
    
    this.selectTournamentById = function(selectedId){
        
        console.log("Trying to select tournament of ID " + selectedId);
        
        for(var t in $scope.tournaments){
            if($scope.tournaments[t].id == selectedId)
            {
                $scope.currentTournament = $scope.tournaments[t];
                $rootScope.$emit('tournamentChange', $scope.currentTournament);
                $cookieStore.put('currentTournament', $scope.currentTournament);
                console.log("New tournament name should be " + $scope.tournaments[t].name);
                console.log("New tournament name is " + $scope.currentTournament.name);
            }
        }
    }
    
});

