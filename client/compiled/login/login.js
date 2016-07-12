'use strict';

angular.module('login', []).controller('loginController', function ($scope, $http, $window, $location) {

  $scope.invalid = '';

  $scope.login = function (user) {
    user = user || {};
    if (user.username === undefined) {
      $scope.invalid = 'No username entered, please try again';
    } else if (user.password === undefined) {
      $scope.invalid = 'No password entered, please try again';
    } else {
      $http({
        method: 'GET',
        url: '/users/password/',
        params: { username: user.username, password: user.password }
      }).then(function (res) {
        $window.localStorage.setItem('com.wander', res.data);
        $location.path('/home');
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9sb2dpbi9sb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFFBQVEsTUFBUixDQUFlLE9BQWYsRUFBd0IsRUFBeEIsRUFDRyxVQURILENBQ2MsaUJBRGQsRUFDaUMsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixPQUFoQixFQUF5QixTQUF6QixFQUF1Qzs7QUFFcEUsU0FBTyxPQUFQLEdBQWlCLEVBQWpCOztBQUVBLFNBQU8sS0FBUCxHQUFlLFVBQUMsSUFBRCxFQUFVO0FBQ3ZCLFdBQU8sUUFBUSxFQUFmO0FBQ0EsUUFBSSxLQUFLLFFBQUwsS0FBa0IsU0FBdEIsRUFBaUM7QUFDL0IsYUFBTyxPQUFQLEdBQWlCLHVDQUFqQjtBQUNELEtBRkQsTUFFTyxJQUFJLEtBQUssUUFBTCxLQUFrQixTQUF0QixFQUFpQztBQUN0QyxhQUFPLE9BQVAsR0FBaUIsdUNBQWpCO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsWUFBTTtBQUNKLGdCQUFRLEtBREo7QUFFSixhQUFLLGtCQUZEO0FBR0osZ0JBQVEsRUFBQyxVQUFVLEtBQUssUUFBaEIsRUFBMEIsVUFBVSxLQUFLLFFBQXpDO0FBSEosT0FBTixFQUtDLElBTEQsQ0FLTSxVQUFDLEdBQUQsRUFBUztBQUNiLGdCQUFRLFlBQVIsQ0FBcUIsT0FBckIsQ0FBNkIsWUFBN0IsRUFBMkMsSUFBSSxJQUEvQztBQUNBLGtCQUFVLElBQVYsQ0FBZSxPQUFmO0FBQ0QsT0FSRDtBQVNEO0FBQ0YsR0FqQkQ7QUFtQkQsQ0F4QkgiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbG9naW4nLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ2xvZ2luQ29udHJvbGxlcicsICgkc2NvcGUsICRodHRwLCAkd2luZG93LCAkbG9jYXRpb24pID0+IHtcblxuICAgICRzY29wZS5pbnZhbGlkID0gJyc7XG5cbiAgICAkc2NvcGUubG9naW4gPSAodXNlcikgPT4ge1xuICAgICAgdXNlciA9IHVzZXIgfHwge307XG4gICAgICBpZiAodXNlci51c2VybmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICRzY29wZS5pbnZhbGlkID0gJ05vIHVzZXJuYW1lIGVudGVyZWQsIHBsZWFzZSB0cnkgYWdhaW4nO1xuICAgICAgfSBlbHNlIGlmICh1c2VyLnBhc3N3b3JkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgJHNjb3BlLmludmFsaWQgPSAnTm8gcGFzc3dvcmQgZW50ZXJlZCwgcGxlYXNlIHRyeSBhZ2Fpbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICB1cmw6ICcvdXNlcnMvcGFzc3dvcmQvJyxcbiAgICAgICAgICBwYXJhbXM6IHt1c2VybmFtZTogdXNlci51c2VybmFtZSwgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmR9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAkd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb20ud2FuZGVyJywgcmVzLmRhdGEpO1xuICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvaG9tZScpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG4iXX0=