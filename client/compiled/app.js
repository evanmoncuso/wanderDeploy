'use strict';

angular.module('wander', ['ui.router', 'login', 'create', 'main']).config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('login');

  $stateProvider.state('login', {
    templateUrl: '../app/login/login.html',
    url: '/login',
    controller: 'loginController',
    data: {
      login: false
    }
  }).state('create', {
    templateUrl: '../app/createUser/create.html',
    url: '/create',
    controller: 'createUserController',
    data: {
      login: false
    }
  }).state('all', {
    templateUrl: '../app/main/allitems.html',
    url: '/all',
    controller: 'wanderController',
    data: {
      login: true
    }
  }).state('home', {
    templateUrl: '../app/main/homepage.html',
    url: '/home',
    controller: 'wanderController',
    data: {
      login: true
    }
  });

  $httpProvider.interceptors.push('Authorize');
}).controller('headerController', function ($scope, $window, $location) {
  $scope.logout = function () {
    $window.localStorage.removeItem('com.wander');
    $location.path('/login');
  };
}).factory('Authorize', function ($window) {
  var attach = {
    request: function request(object) {
      // retrieves any old token from the browser storage locally
      var jwt = $window.localStorage.getItem('com.wander');
      if (jwt) {
        // add that token to the token portion of the headers
        object.headers['x-access-token'] = jwt;
      }
      // allow all origins!?
      object.headers['Allow-Control-Allow-Origin'] = '*';
      // give the object back
      return object;
    }
  };
  return attach;
})
// here I want to run this everytime
.run(function ($rootScope, $location, $window) {
  // when we see a state change from the location, let's do something!
  $rootScope.$on('$stateChangeStart', function (event, toState, Auth) {
    var login = toState.data.login;
    var hasToken = $window.localStorage.getItem('com.wander');
    // here is where I want to add the check for the token!
    if (login && !hasToken) {
      $location.path('/login');
    } else {}
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxRQUFRLE1BQVIsQ0FBZSxRQUFmLEVBQXlCLENBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsUUFBdkIsRUFBaUMsTUFBakMsQ0FBekIsRUFDRyxNQURILENBQ1UsVUFBQyxhQUFELEVBQWdCLGNBQWhCLEVBQWdDLGtCQUFoQyxFQUF1RDs7QUFFN0QscUJBQW1CLFNBQW5CLENBQTZCLE9BQTdCOztBQUVBLGlCQUNHLEtBREgsQ0FDUyxPQURULEVBQ2tCO0FBQ2QsaUJBQWEseUJBREM7QUFFZCxTQUFLLFFBRlM7QUFHZCxnQkFBWSxpQkFIRTtBQUlkLFVBQU07QUFDSixhQUFPO0FBREg7QUFKUSxHQURsQixFQVNHLEtBVEgsQ0FTUyxRQVRULEVBU21CO0FBQ2YsaUJBQWEsK0JBREU7QUFFZixTQUFLLFNBRlU7QUFHZixnQkFBWSxzQkFIRztBQUlmLFVBQU07QUFDSixhQUFPO0FBREg7QUFKUyxHQVRuQixFQWlCRyxLQWpCSCxDQWlCUyxLQWpCVCxFQWlCZ0I7QUFDWixpQkFBYSwyQkFERDtBQUVaLFNBQUssTUFGTztBQUdaLGdCQUFZLGtCQUhBO0FBSVosVUFBTTtBQUNKLGFBQU87QUFESDtBQUpNLEdBakJoQixFQXlCRyxLQXpCSCxDQXlCUyxNQXpCVCxFQXlCaUI7QUFDYixpQkFBYSwyQkFEQTtBQUViLFNBQUssT0FGUTtBQUdiLGdCQUFZLGtCQUhDO0FBSWIsVUFBTTtBQUNKLGFBQU87QUFESDtBQUpPLEdBekJqQjs7QUFrQ0UsZ0JBQWMsWUFBZCxDQUEyQixJQUEzQixDQUFnQyxXQUFoQztBQUNILENBeENILEVBeUNHLFVBekNILENBeUNjLGtCQXpDZCxFQXlDa0MsVUFBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixTQUFsQixFQUFnQztBQUM5RCxTQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQixZQUFRLFlBQVIsQ0FBcUIsVUFBckIsQ0FBZ0MsWUFBaEM7QUFDQSxjQUFVLElBQVYsQ0FBZSxRQUFmO0FBQ0QsR0FIRDtBQUlELENBOUNILEVBK0NHLE9BL0NILENBK0NXLFdBL0NYLEVBK0N3QixVQUFDLE9BQUQsRUFBYTtBQUNqQyxNQUFJLFNBQVM7QUFDWCxhQUFTLGlCQUFVLE1BQVYsRUFBa0I7O0FBRXpCLFVBQUksTUFBTSxRQUFRLFlBQVIsQ0FBcUIsT0FBckIsQ0FBNkIsWUFBN0IsQ0FBVjtBQUNBLFVBQUksR0FBSixFQUFTOztBQUVQLGVBQU8sT0FBUCxDQUFlLGdCQUFmLElBQW1DLEdBQW5DO0FBQ0Q7O0FBRUQsYUFBTyxPQUFQLENBQWUsNEJBQWYsSUFBK0MsR0FBL0M7O0FBRUEsYUFBTyxNQUFQO0FBQ0Q7QUFaVSxHQUFiO0FBY0EsU0FBTyxNQUFQO0FBQ0QsQ0EvREg7O0FBQUEsQ0FpRUcsR0FqRUgsQ0FpRU8sVUFBQyxVQUFELEVBQWEsU0FBYixFQUF3QixPQUF4QixFQUFvQzs7QUFFdkMsYUFBVyxHQUFYLENBQWUsbUJBQWYsRUFBb0MsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFpQixJQUFqQixFQUEwQjtBQUM1RCxRQUFJLFFBQVEsUUFBUSxJQUFSLENBQWEsS0FBekI7QUFDQSxRQUFJLFdBQVcsUUFBUSxZQUFSLENBQXFCLE9BQXJCLENBQTZCLFlBQTdCLENBQWY7O0FBRUEsUUFBRyxTQUFTLENBQUMsUUFBYixFQUF1QjtBQUNyQixnQkFBVSxJQUFWLENBQWUsUUFBZjtBQUNELEtBRkQsTUFFTyxDQUVOO0FBQ0YsR0FURDtBQVVELENBN0VIIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCd3YW5kZXInLCBbJ3VpLnJvdXRlcicsICdsb2dpbicsICdjcmVhdGUnLCAnbWFpbiddKVxuICAuY29uZmlnKCgkaHR0cFByb3ZpZGVyLCAkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSA9PiB7XG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCdsb2dpbicpO1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnbG9naW4nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vYXBwL2xvZ2luL2xvZ2luLmh0bWwnLFxuICAgICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgICBjb250cm9sbGVyOiAnbG9naW5Db250cm9sbGVyJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxvZ2luOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjcmVhdGUnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vYXBwL2NyZWF0ZVVzZXIvY3JlYXRlLmh0bWwnLFxuICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2NyZWF0ZVVzZXJDb250cm9sbGVyJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxvZ2luOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdhbGwnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vYXBwL21haW4vYWxsaXRlbXMuaHRtbCcsXG4gICAgICAgIHVybDogJy9hbGwnLFxuICAgICAgICBjb250cm9sbGVyOiAnd2FuZGVyQ29udHJvbGxlcicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBsb2dpbjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL2FwcC9tYWluL2hvbWVwYWdlLmh0bWwnLFxuICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgIGNvbnRyb2xsZXI6ICd3YW5kZXJDb250cm9sbGVyJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxvZ2luOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdBdXRob3JpemUnKTtcbiAgfSlcbiAgLmNvbnRyb2xsZXIoJ2hlYWRlckNvbnRyb2xsZXInLCAoJHNjb3BlLCAkd2luZG93LCAkbG9jYXRpb24pID0+IHtcbiAgICAkc2NvcGUubG9nb3V0ID0gKCkgPT4ge1xuICAgICAgJHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29tLndhbmRlcicpO1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9sb2dpbicpO1xuICAgIH1cbiAgfSlcbiAgLmZhY3RvcnkoJ0F1dGhvcml6ZScsICgkd2luZG93KSA9PiB7XG4gICAgbGV0IGF0dGFjaCA9IHtcbiAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgLy8gcmV0cmlldmVzIGFueSBvbGQgdG9rZW4gZnJvbSB0aGUgYnJvd3NlciBzdG9yYWdlIGxvY2FsbHlcbiAgICAgICAgbGV0IGp3dCA9ICR3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbS53YW5kZXInKTtcbiAgICAgICAgaWYgKGp3dCkge1xuICAgICAgICAgIC8vIGFkZCB0aGF0IHRva2VuIHRvIHRoZSB0b2tlbiBwb3J0aW9uIG9mIHRoZSBoZWFkZXJzXG4gICAgICAgICAgb2JqZWN0LmhlYWRlcnNbJ3gtYWNjZXNzLXRva2VuJ10gPSBqd3Q7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWxsb3cgYWxsIG9yaWdpbnMhP1xuICAgICAgICBvYmplY3QuaGVhZGVyc1snQWxsb3ctQ29udHJvbC1BbGxvdy1PcmlnaW4nXSA9ICcqJztcbiAgICAgICAgLy8gZ2l2ZSB0aGUgb2JqZWN0IGJhY2tcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBhdHRhY2g7XG4gIH0pXG4gIC8vIGhlcmUgSSB3YW50IHRvIHJ1biB0aGlzIGV2ZXJ5dGltZVxuICAucnVuKCgkcm9vdFNjb3BlLCAkbG9jYXRpb24sICR3aW5kb3cpID0+IHtcbiAgICAvLyB3aGVuIHdlIHNlZSBhIHN0YXRlIGNoYW5nZSBmcm9tIHRoZSBsb2NhdGlvbiwgbGV0J3MgZG8gc29tZXRoaW5nIVxuICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIChldmVudCwgdG9TdGF0ZSwgQXV0aCkgPT4ge1xuICAgICAgbGV0IGxvZ2luID0gdG9TdGF0ZS5kYXRhLmxvZ2luO1xuICAgICAgbGV0IGhhc1Rva2VuID0gJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tLndhbmRlcicpO1xuICAgICAgLy8gaGVyZSBpcyB3aGVyZSBJIHdhbnQgdG8gYWRkIHRoZSBjaGVjayBmb3IgdGhlIHRva2VuIVxuICAgICAgaWYobG9naW4gJiYgIWhhc1Rva2VuKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvbG9naW4nKVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuIl19