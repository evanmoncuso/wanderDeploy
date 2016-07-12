angular.module('create', [])
  .controller('createUserController', ($scope, $http) => {
    $scope.hi = 'hi';
    $scope.invalid = '';

    $scope.create = (newUser) => {
      newUser = newUser || {};
      let newUserData = {};

      // do a little baby check on the data
      if (newUser.password === newUser.passwordConfirm && newUser.password !== undefined) {
        newUserData = {
          username: newUser.username,
          password: newUser.password,
          firstname: newUser.firstname,
          lastname: newUser.lastname
        };
        $scope.user = '';
      } else {
        // warn and reset password fields if they don't match
        $scope.invalid = 'Your username and password do not match! Please try again.';
        $scope.user.password = '';
        $scope.user.passwordConfirm = '';
      }

      //send the http request to the server => to the db
      $http({
        method: 'POST',
        url: '/users/',
        data: newUserData
      })
      .then((res) => {
        console.log('sent!');
      });
    }
  });
