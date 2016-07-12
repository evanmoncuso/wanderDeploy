'use strict';

angular.module('main', []).controller('wanderController', function ($scope, $http, $window) {

  $scope.owned = [];
  $scope.borrowing = [];

  $scope.submitItem = function (item) {
    if (item) {
      $http({
        method: 'POST',
        url: '/items/',
        data: { item: item }
      }).then(function (res) {
        console.log('sent!');
      });
      $scope.item = '';

      $http({
        method: 'GET',
        url: '/items/'
      }).then(function (update) {
        console.log(update);
      });
    } else {
      console.log('invalid string');
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9tYWluL21haW5Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsUUFBUSxNQUFSLENBQWUsTUFBZixFQUF1QixFQUF2QixFQUNDLFVBREQsQ0FDWSxrQkFEWixFQUNnQyxVQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQTRCOztBQUUxRCxTQUFPLEtBQVAsR0FBZSxFQUFmO0FBQ0EsU0FBTyxTQUFQLEdBQW1CLEVBQW5COztBQUVBLFNBQU8sVUFBUCxHQUFvQixVQUFDLElBQUQsRUFBVTtBQUM1QixRQUFJLElBQUosRUFBVTtBQUNSLFlBQU07QUFDSixnQkFBUSxNQURKO0FBRUosYUFBSyxTQUZEO0FBR0osY0FBTSxFQUFDLE1BQU0sSUFBUDtBQUhGLE9BQU4sRUFLQyxJQUxELENBS00sVUFBQyxHQUFELEVBQVM7QUFDYixnQkFBUSxHQUFSLENBQVksT0FBWjtBQUNELE9BUEQ7QUFRQSxhQUFPLElBQVAsR0FBYyxFQUFkOztBQUVBLFlBQU07QUFDSixnQkFBUSxLQURKO0FBRUosYUFBSztBQUZELE9BQU4sRUFJQyxJQUpELENBSU0sVUFBQyxNQUFELEVBQVk7QUFDaEIsZ0JBQVEsR0FBUixDQUFZLE1BQVo7QUFDRCxPQU5EO0FBT0QsS0FsQkQsTUFrQk87QUFDTCxjQUFRLEdBQVIsQ0FBWSxnQkFBWjtBQUNEO0FBQ0YsR0F0QkQ7QUF1QkQsQ0E3QkQiLCJmaWxlIjoibWFpbkNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbWFpbicsIFtdKVxuLmNvbnRyb2xsZXIoJ3dhbmRlckNvbnRyb2xsZXInLCAoJHNjb3BlLCAkaHR0cCwgJHdpbmRvdykgPT4ge1xuXG4gICRzY29wZS5vd25lZCA9IFtdO1xuICAkc2NvcGUuYm9ycm93aW5nID0gW107XG5cbiAgJHNjb3BlLnN1Ym1pdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICAkaHR0cCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6ICcvaXRlbXMvJyxcbiAgICAgICAgZGF0YToge2l0ZW06IGl0ZW19XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VudCEnKTtcbiAgICAgIH0pO1xuICAgICAgJHNjb3BlLml0ZW0gPSAnJztcblxuICAgICAgJGh0dHAoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6ICcvaXRlbXMvJ1xuICAgICAgfSlcbiAgICAgIC50aGVuKCh1cGRhdGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codXBkYXRlKTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkIHN0cmluZycpO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=