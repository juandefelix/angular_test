// var app = angular.module('myApp',["ngResource"]);

// app.factory("entry", function($resource) {
//     $resource("/entries/:id", {id: "@id"}, {update: {method: "PUT"}});
//   });

// app.controller('raffleCtrl', function($scope, $resource){
//   $scope.entries = [
//     {name: 'Bob'},
//     {name: 'Juan'},
//     {name: 'Tad'}
//     ]
//   $scope.addEntry = function(){
//     $scope.entries.push($scope.newEntry)
//     $scope.newEntry = {}
//   };

//   $scope.drawWinner = function(){
//     pool = []
//     angular.forEach($scope.entries, function(entry){
//       if (!entry.winner) {
//         pool.push(entry) 
//       }
//     })
//     if (pool.length > 0) {
//       var index = Math.floor(Math.random()*pool.length)
//       entry = pool[index];
//       entry.winner = true;
//       $scope.lastWinner = entry;
//     }
//   }
// })

var app = angular.module("myApp", ["ngResource"])

app.factory ("Entry", ["$resource", function($resource){
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
    pool = []
    angular.forEach($scope.entries, function(entry){
      if (!entry.winner){pool.push(entry)}
      if (pool.length > 0){
      entry = pool[Math.floor(Math.random()*pool.length)]
        entry.winner = true
        entry.$update()
        $scope.lastWinner = entry
      }
    })
  }
}])