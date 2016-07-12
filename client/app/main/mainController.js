angular.module('main', [])
.controller('wanderController', ($scope, $http, $window) => {

  $scope.owned = [];
  $scope.borrowing = [];

  $scope.submitItem = (item) => {
    if (item) {
      $http({
        method: 'POST',
        url: '/items/',
        data: {item: item}
      })
      .then((res) => {
        console.log('sent!');
      });
      $scope.item = '';

      $http({
        method: 'GET',
        url: '/items/'
      })
      .then((update) => {
        console.log(update);
      })
    } else {
      console.log('invalid string');
    }
  }
});
