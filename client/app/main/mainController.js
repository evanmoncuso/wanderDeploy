angular.module('main', [])
.controller('wanderController', ($scope, $http) => {

  $scope.submitItem = (item) => {
    console.log(item);
  }
});
