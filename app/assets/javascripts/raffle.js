var app = angular.module("myApp", ["ngResource"])

app.factory("Entry", ["$resource", function($resource){
  return $resource("/entries/:id", {id: "@id"}, {update: {method: "PUT"}})}
])

app.controller('raffleCtrl', ["$scope", "Entry", function($scope, Entry){
  $scope.entries = Entry.query()
  
  $scope.addEntry = function(){
    entry = Entry.save($scope.newEntry)
    $scope.entries.push(entry)
    $scope.newEntry = {}
  }
    
  $scope.drawWinner = function(){
    var pool = []
    angular.forEach($scope.entries, function(entry){
      if (!entry.winner){
        console.log("Hi")
        pool.push(entry)
      }
    })

    if (pool.length > 0){
    entry = pool[Math.floor(Math.random()*pool.length)]
      entry.winner = true
      entry.$update()
      $scope.lastWinner = entry
    }
  }
}])