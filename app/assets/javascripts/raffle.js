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
    var index = Math.floor(Math.random()*$scope.entries.length)
    entry = $scope.entries[index];
    entry.winner = true;
    $scope.lastWinner = entry;
  }
})