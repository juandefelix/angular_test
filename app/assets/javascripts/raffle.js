var app = angular.module('myApp',[]);

app.controller('raffleCtrl', function($scope){
  $scope.entries = [
    {name: 'Bob'},
    {name: 'Juan'},
    {name: 'Tad'}
    ]
  $scope.addEntry = function(){
    $scope.entries.push($scope.newEntry)
    $scope.newEntry = {}
  };

  $scope.drawWinner = function(){
    pool = []
    angular.forEach($scope.entries, function(entry){
      if (!entry.winner) {
        pool.push(entry) 
      }
    })
    if (pool.length > 0) {
      var index = Math.floor(Math.random()*pool.length)
      entry = pool[index];
      entry.winner = true;
      $scope.lastWinner = entry;
    }
  }
})