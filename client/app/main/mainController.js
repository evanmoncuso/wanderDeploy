angular.module('main', [])
.controller('wanderController', ($scope, $http, $window) => {

  $scope.owned = [];
  $scope.borrowing = [];


  $scope.borrowItem = (item) => {
    console.log(item);
  }

  $scope.updateOaL = () => {
    $http({
      method: 'GET',
      url: '/items/'
    })
    .then((update) => {
      update.data.map((item) => {
        $scope.owned.push(item);
      });
    })
  }

  $scope.update = () => {
    $http({
      method: 'GET',
      url: '/items/all/'
    })
    .then((update) => {
      $scope.allItemsList = update.data;
    });
  }

  $scope.submitItem = (item) => {
    console.log('it worked!')
    if (item) {
      $http({
        method: 'POST',
        url: '/items/',
        data: {item: item}
      })
      .then((res) => {
        console.log('sent!');
        $scope.update();
        $scope.updateOaL();
      });

      $scope.item = '';

    } else {
      console.log('invalid string');
    }
  };

});
