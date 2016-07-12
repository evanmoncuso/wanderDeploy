'use strict';

angular.module('main', []).controller('wanderController', function ($scope, $http, $window) {

  $scope.submitItem = function (item) {
    $http({
      method: 'POST',
      url: '/items/',
      data: { item: item }
    }).then(function (res) {
      console.log('sent!');
    });
    $scope.item = '';
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9tYWluL21haW5Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsUUFBUSxNQUFSLENBQWUsTUFBZixFQUF1QixFQUF2QixFQUNDLFVBREQsQ0FDWSxrQkFEWixFQUNnQyxVQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQTRCOztBQUUxRCxTQUFPLFVBQVAsR0FBb0IsVUFBQyxJQUFELEVBQVU7QUFDNUIsVUFBTTtBQUNKLGNBQVEsTUFESjtBQUVKLFdBQUssU0FGRDtBQUdKLFlBQU0sRUFBQyxNQUFNLElBQVA7QUFIRixLQUFOLEVBS0MsSUFMRCxDQUtNLFVBQUMsR0FBRCxFQUFTO0FBQ2IsY0FBUSxHQUFSLENBQVksT0FBWjtBQUNELEtBUEQ7QUFRQSxXQUFPLElBQVAsR0FBYyxFQUFkO0FBQ0QsR0FWRDtBQVdELENBZEQiLCJmaWxlIjoibWFpbkNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbWFpbicsIFtdKVxuLmNvbnRyb2xsZXIoJ3dhbmRlckNvbnRyb2xsZXInLCAoJHNjb3BlLCAkaHR0cCwgJHdpbmRvdykgPT4ge1xuXG4gICRzY29wZS5zdWJtaXRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAkaHR0cCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJy9pdGVtcy8nLFxuICAgICAgZGF0YToge2l0ZW06IGl0ZW19XG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnc2VudCEnKTtcbiAgICB9KTtcbiAgICAkc2NvcGUuaXRlbSA9ICcnO1xuICB9XG59KTtcbiJdfQ==