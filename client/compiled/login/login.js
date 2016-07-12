'use strict';

angular.module('login', []).controller('loginController', function ($scope, $http) {

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
        console.log('GET for username ' + user.username + ' sent!');
        console.log('20: ', res.body);
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9sb2dpbi9sb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFFBQVEsTUFBUixDQUFlLE9BQWYsRUFBd0IsRUFBeEIsRUFDRyxVQURILENBQ2MsaUJBRGQsRUFDaUMsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjs7QUFFaEQsU0FBTyxPQUFQLEdBQWlCLEVBQWpCOztBQUVBLFNBQU8sS0FBUCxHQUFlLFVBQUMsSUFBRCxFQUFVO0FBQ3ZCLFdBQU8sUUFBUSxFQUFmO0FBQ0EsUUFBSSxLQUFLLFFBQUwsS0FBa0IsU0FBdEIsRUFBaUM7QUFDL0IsYUFBTyxPQUFQLEdBQWlCLHVDQUFqQjtBQUNELEtBRkQsTUFFTyxJQUFJLEtBQUssUUFBTCxLQUFrQixTQUF0QixFQUFpQztBQUN0QyxhQUFPLE9BQVAsR0FBaUIsdUNBQWpCO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsWUFBTTtBQUNKLGdCQUFRLEtBREo7QUFFSixhQUFLLGtCQUZEO0FBR0osZ0JBQVEsRUFBQyxVQUFVLEtBQUssUUFBaEIsRUFBMEIsVUFBVSxLQUFLLFFBQXpDO0FBSEosT0FBTixFQUtDLElBTEQsQ0FLTSxVQUFDLEdBQUQsRUFBUztBQUNiLGdCQUFRLEdBQVIsQ0FBWSxzQkFBc0IsS0FBSyxRQUEzQixHQUFzQyxRQUFsRDtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLElBQUksSUFBeEI7QUFDRCxPQVJEO0FBU0Q7QUFDRixHQWpCRDtBQW1CRCxDQXhCSCIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdsb2dpbicsIFtdKVxuICAuY29udHJvbGxlcignbG9naW5Db250cm9sbGVyJywgKCRzY29wZSwgJGh0dHApID0+IHtcblxuICAgICRzY29wZS5pbnZhbGlkID0gJyc7XG5cbiAgICAkc2NvcGUubG9naW4gPSAodXNlcikgPT4ge1xuICAgICAgdXNlciA9IHVzZXIgfHwge307XG4gICAgICBpZiAodXNlci51c2VybmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICRzY29wZS5pbnZhbGlkID0gJ05vIHVzZXJuYW1lIGVudGVyZWQsIHBsZWFzZSB0cnkgYWdhaW4nO1xuICAgICAgfSBlbHNlIGlmICh1c2VyLnBhc3N3b3JkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgJHNjb3BlLmludmFsaWQgPSAnTm8gcGFzc3dvcmQgZW50ZXJlZCwgcGxlYXNlIHRyeSBhZ2Fpbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICB1cmw6ICcvdXNlcnMvcGFzc3dvcmQvJyxcbiAgICAgICAgICBwYXJhbXM6IHt1c2VybmFtZTogdXNlci51c2VybmFtZSwgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmR9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnR0VUIGZvciB1c2VybmFtZSAnICsgdXNlci51c2VybmFtZSArICcgc2VudCEnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnMjA6ICcsIHJlcy5ib2R5KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pO1xuIl19