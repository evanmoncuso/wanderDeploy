angular.module('login', [])
  .controller('loginController', ($scope, $http) => {

    $scope.invalid = '';

    $scope.login = (user) => {
      user = user || {};
      if (user.username === undefined) {
        $scope.invalid = 'No username entered, please try again';
      } else if (user.password === undefined) {
        $scope.invalid = 'No password entered, please try again';
      } else {
        $http({
          method: 'GET',
          url: '/users/password/',
          params: {username: user.username, password: user.password}
        })
        .then((res) => {
          console.log('GET for username ' + user.username + ' sent!');
          console.log('20: ', res.body);
        });
      }
    }

  });
