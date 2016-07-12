'use strict';

angular.module('create', []).controller('createUserController', function ($scope, $http) {
  $scope.hi = 'hi';
  $scope.invalid = '';

  $scope.create = function (newUser) {
    newUser = newUser || {};
    var newUserData = {};

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
    }).then(function (res) {
      console.log('sent!');
    });
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jcmVhdGVVc2VyL2NyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFFBQVEsTUFBUixDQUFlLFFBQWYsRUFBeUIsRUFBekIsRUFDRyxVQURILENBQ2Msc0JBRGQsRUFDc0MsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjtBQUNyRCxTQUFPLEVBQVAsR0FBWSxJQUFaO0FBQ0EsU0FBTyxPQUFQLEdBQWlCLEVBQWpCOztBQUVBLFNBQU8sTUFBUCxHQUFnQixVQUFDLE9BQUQsRUFBYTtBQUMzQixjQUFVLFdBQVcsRUFBckI7QUFDQSxRQUFJLGNBQWMsRUFBbEI7OztBQUdBLFFBQUksUUFBUSxRQUFSLEtBQXFCLFFBQVEsZUFBN0IsSUFBZ0QsUUFBUSxRQUFSLEtBQXFCLFNBQXpFLEVBQW9GO0FBQ2xGLG9CQUFjO0FBQ1osa0JBQVUsUUFBUSxRQUROO0FBRVosa0JBQVUsUUFBUSxRQUZOO0FBR1osbUJBQVcsUUFBUSxTQUhQO0FBSVosa0JBQVUsUUFBUTtBQUpOLE9BQWQ7QUFNQSxhQUFPLElBQVAsR0FBYyxFQUFkO0FBQ0QsS0FSRCxNQVFPOztBQUVMLGFBQU8sT0FBUCxHQUFpQiw0REFBakI7QUFDQSxhQUFPLElBQVAsQ0FBWSxRQUFaLEdBQXVCLEVBQXZCO0FBQ0EsYUFBTyxJQUFQLENBQVksZUFBWixHQUE4QixFQUE5QjtBQUNEOzs7QUFHRCxVQUFNO0FBQ0osY0FBUSxNQURKO0FBRUosV0FBSyxTQUZEO0FBR0osWUFBTTtBQUhGLEtBQU4sRUFLQyxJQUxELENBS00sVUFBQyxHQUFELEVBQVM7QUFDYixjQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsS0FQRDtBQVFELEdBN0JEO0FBOEJELENBbkNIIiwiZmlsZSI6ImNyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdjcmVhdGUnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ2NyZWF0ZVVzZXJDb250cm9sbGVyJywgKCRzY29wZSwgJGh0dHApID0+IHtcbiAgICAkc2NvcGUuaGkgPSAnaGknO1xuICAgICRzY29wZS5pbnZhbGlkID0gJyc7XG5cbiAgICAkc2NvcGUuY3JlYXRlID0gKG5ld1VzZXIpID0+IHtcbiAgICAgIG5ld1VzZXIgPSBuZXdVc2VyIHx8IHt9O1xuICAgICAgbGV0IG5ld1VzZXJEYXRhID0ge307XG5cbiAgICAgIC8vIGRvIGEgbGl0dGxlIGJhYnkgY2hlY2sgb24gdGhlIGRhdGFcbiAgICAgIGlmIChuZXdVc2VyLnBhc3N3b3JkID09PSBuZXdVc2VyLnBhc3N3b3JkQ29uZmlybSAmJiBuZXdVc2VyLnBhc3N3b3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VXNlckRhdGEgPSB7XG4gICAgICAgICAgdXNlcm5hbWU6IG5ld1VzZXIudXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQ6IG5ld1VzZXIucGFzc3dvcmQsXG4gICAgICAgICAgZmlyc3RuYW1lOiBuZXdVc2VyLmZpcnN0bmFtZSxcbiAgICAgICAgICBsYXN0bmFtZTogbmV3VXNlci5sYXN0bmFtZVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUudXNlciA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2FybiBhbmQgcmVzZXQgcGFzc3dvcmQgZmllbGRzIGlmIHRoZXkgZG9uJ3QgbWF0Y2hcbiAgICAgICAgJHNjb3BlLmludmFsaWQgPSAnWW91ciB1c2VybmFtZSBhbmQgcGFzc3dvcmQgZG8gbm90IG1hdGNoISBQbGVhc2UgdHJ5IGFnYWluLic7XG4gICAgICAgICRzY29wZS51c2VyLnBhc3N3b3JkID0gJyc7XG4gICAgICAgICRzY29wZS51c2VyLnBhc3N3b3JkQ29uZmlybSA9ICcnO1xuICAgICAgfVxuXG4gICAgICAvL3NlbmQgdGhlIGh0dHAgcmVxdWVzdCB0byB0aGUgc2VydmVyID0+IHRvIHRoZSBkYlxuICAgICAgJGh0dHAoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgdXJsOiAnL3VzZXJzLycsXG4gICAgICAgIGRhdGE6IG5ld1VzZXJEYXRhXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VudCEnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4iXX0=