var app = angular.module('myApp',[]);

app.controller('raffleCtrl', function($scope){
  $scope.entries = [
    {name: 'Bob'},
    {name: 'Juan'},
    {name: 'Tad'}
    ]
  $scope.addEntry = function(entry){
    $scope.entries.push({name: entry})
  };
})