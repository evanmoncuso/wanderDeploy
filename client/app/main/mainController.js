angular.module('main', [])
.controller('wanderController', ($scope, $http, $window) => {

  $scope.submitItem = (item) => {
    $http({
      method: 'POST',
      url: '/items/',
      data: {item: item}
    })
    .then((res) => {
      console.log('sent!');
    });
  }
});
