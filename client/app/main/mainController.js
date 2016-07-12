angular.module('main', [])
.controller('wanderController', ($scope, $http, $window) => {

  $scope.items = [];
  $scope.lentToMe = [];

  // register when the user has clicked on an unused item
  $scope.borrowItem = (item) => {
    $http({
      method: 'PUT',
      url: '/items/take/',
      data: {item: item}
    });
  }

  $scope.returnItem = (item) => {
    $http({
      method: 'PUT',
      url: '/items/return/',
      data: {item: item}
    });
  }

  $scope.removeItem = (item) => {
    $http({
      method: 'DELETE',
      url: '/items',
      data: {item: item}
    });
  }

  // update the list of items available
  $scope.update = (all) => {
    all = all ? 'all' : '';
    $http({
      method: 'GET',
      url: '/items/' + all
    })
    .then((update) => {
      update.data.map((item) => {
        $scope.items.push(item);
      });
    });
  }

  $scope.getMyLentItems = () => {
    $http({
      method: 'GET',
      url: '/items/mine'
    })
    .then((update) => {
      console.log(update);
      update.data.map((item) => {
        $scope.lentToMe.push(item);
      });
    });
  }

  // create and submit a new items to the server
  $scope.submitItem = (item) => {
    if (item) {
      $http({
        method: 'POST',
        url: '/items/',
        data: {item: item}
      })
      .then((res) => {
        $scope.update();
      });
      $scope.item = '';
    } else {
      console.log('invalid string');
    }
  };
});
