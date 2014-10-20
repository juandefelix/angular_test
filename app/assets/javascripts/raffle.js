app = angular.module('myApp',[]);

app.controller('RaffleCtrl', function(){
  this.entries = [
  {name: 'Bob'},
  {name: 'Juan'},
  {name: 'Tad'}]
})