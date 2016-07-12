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
    req: function req(call) {
      var token = $window.localStorage.getItem('com.wander');
      if (token) {
        call.headers['x-access-token'] = token;
      }
      call.headers['Allow-Control-Allow-Origin'] = '*';
      return call;
    }
  };
  return attach;
})
// here I want to run this everytime
.run(function ($rootScope, $location, $window) {
  // when we see a state change from the location, let's do something!
  $rootScope.$on('$stateChangeStart', function (event, toState, Auth) {
    var login = toState.data.login;
    console.log('need to log in?', login);
    console.log('has token?', !!hasToken);
    var hasToken = $window.localStorage.getItem('com.wander');
    // here is where I want to add the check for the token!
    if (login && !hasToken) {
      $location.path('/login');
    } else {}
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxRQUFRLE1BQVIsQ0FBZSxRQUFmLEVBQXlCLENBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsUUFBdkIsRUFBaUMsTUFBakMsQ0FBekIsRUFDRyxNQURILENBQ1UsVUFBQyxhQUFELEVBQWdCLGNBQWhCLEVBQWdDLGtCQUFoQyxFQUF1RDs7QUFFN0QscUJBQW1CLFNBQW5CLENBQTZCLE9BQTdCOztBQUVBLGlCQUNHLEtBREgsQ0FDUyxPQURULEVBQ2tCO0FBQ2QsaUJBQWEseUJBREM7QUFFZCxTQUFLLFFBRlM7QUFHZCxnQkFBWSxpQkFIRTtBQUlkLFVBQU07QUFDSixhQUFPO0FBREg7QUFKUSxHQURsQixFQVNHLEtBVEgsQ0FTUyxRQVRULEVBU21CO0FBQ2YsaUJBQWEsK0JBREU7QUFFZixTQUFLLFNBRlU7QUFHZixnQkFBWSxzQkFIRztBQUlmLFVBQU07QUFDSixhQUFPO0FBREg7QUFKUyxHQVRuQixFQWlCRyxLQWpCSCxDQWlCUyxNQWpCVCxFQWlCaUI7QUFDYixpQkFBYSwyQkFEQTtBQUViLFNBQUssT0FGUTtBQUdiLGdCQUFZLGtCQUhDO0FBSWIsVUFBTTtBQUNKLGFBQU87QUFESDtBQUpPLEdBakJqQjs7QUEwQkUsZ0JBQWMsWUFBZCxDQUEyQixJQUEzQixDQUFnQyxXQUFoQztBQUNILENBaENILEVBaUNHLFVBakNILENBaUNjLGtCQWpDZCxFQWlDa0MsVUFBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixTQUFsQixFQUFnQztBQUM5RCxTQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQixZQUFRLFlBQVIsQ0FBcUIsVUFBckIsQ0FBZ0MsWUFBaEM7QUFDQSxjQUFVLElBQVYsQ0FBZSxRQUFmO0FBQ0QsR0FIRDtBQUlELENBdENILEVBdUNHLE9BdkNILENBdUNXLFdBdkNYLEVBdUN3QixVQUFDLE9BQUQsRUFBYTtBQUNqQyxNQUFJLFNBQVM7QUFDWCxTQUFLLGFBQUMsSUFBRCxFQUFVO0FBQ2IsVUFBSSxRQUFRLFFBQVEsWUFBUixDQUFxQixPQUFyQixDQUE2QixZQUE3QixDQUFaO0FBQ0EsVUFBSSxLQUFKLEVBQVc7QUFDVCxhQUFLLE9BQUwsQ0FBYSxnQkFBYixJQUFpQyxLQUFqQztBQUNEO0FBQ0QsV0FBSyxPQUFMLENBQWEsNEJBQWIsSUFBNkMsR0FBN0M7QUFDQSxhQUFPLElBQVA7QUFDRDtBQVJVLEdBQWI7QUFVQSxTQUFPLE1BQVA7QUFDRCxDQW5ESDs7QUFBQSxDQXFERyxHQXJESCxDQXFETyxVQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLE9BQXhCLEVBQW9DOztBQUV2QyxhQUFXLEdBQVgsQ0FBZSxtQkFBZixFQUFvQyxVQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLElBQWpCLEVBQTBCO0FBQzVELFFBQUksUUFBUSxRQUFRLElBQVIsQ0FBYSxLQUF6QjtBQUNBLFlBQVEsR0FBUixDQUFZLGlCQUFaLEVBQStCLEtBQS9CO0FBQ0EsWUFBUSxHQUFSLENBQVksWUFBWixFQUEwQixDQUFDLENBQUMsUUFBNUI7QUFDQSxRQUFJLFdBQVcsUUFBUSxZQUFSLENBQXFCLE9BQXJCLENBQTZCLFlBQTdCLENBQWY7O0FBRUEsUUFBRyxTQUFTLENBQUMsUUFBYixFQUF1QjtBQUNyQixnQkFBVSxJQUFWLENBQWUsUUFBZjtBQUNELEtBRkQsTUFFTyxDQUVOO0FBQ0YsR0FYRDtBQVlELENBbkVIIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCd3YW5kZXInLCBbJ3VpLnJvdXRlcicsICdsb2dpbicsICdjcmVhdGUnLCAnbWFpbiddKVxuICAuY29uZmlnKCgkaHR0cFByb3ZpZGVyLCAkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSA9PiB7XG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCdsb2dpbicpO1xuXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnbG9naW4nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vYXBwL2xvZ2luL2xvZ2luLmh0bWwnLFxuICAgICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgICBjb250cm9sbGVyOiAnbG9naW5Db250cm9sbGVyJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxvZ2luOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjcmVhdGUnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnLi4vYXBwL2NyZWF0ZVVzZXIvY3JlYXRlLmh0bWwnLFxuICAgICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2NyZWF0ZVVzZXJDb250cm9sbGVyJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxvZ2luOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJy4uL2FwcC9tYWluL2hvbWVwYWdlLmh0bWwnLFxuICAgICAgICB1cmw6ICcvaG9tZScsXG4gICAgICAgIGNvbnRyb2xsZXI6ICd3YW5kZXJDb250cm9sbGVyJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGxvZ2luOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdBdXRob3JpemUnKTtcbiAgfSlcbiAgLmNvbnRyb2xsZXIoJ2hlYWRlckNvbnRyb2xsZXInLCAoJHNjb3BlLCAkd2luZG93LCAkbG9jYXRpb24pID0+IHtcbiAgICAkc2NvcGUubG9nb3V0ID0gKCkgPT4ge1xuICAgICAgJHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29tLndhbmRlcicpO1xuICAgICAgJGxvY2F0aW9uLnBhdGgoJy9sb2dpbicpO1xuICAgIH1cbiAgfSlcbiAgLmZhY3RvcnkoJ0F1dGhvcml6ZScsICgkd2luZG93KSA9PiB7XG4gICAgbGV0IGF0dGFjaCA9IHtcbiAgICAgIHJlcTogKGNhbGwpID0+IHtcbiAgICAgICAgbGV0IHRva2VuID0gJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tLndhbmRlcicpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBjYWxsLmhlYWRlcnNbJ3gtYWNjZXNzLXRva2VuJ10gPSB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICBjYWxsLmhlYWRlcnNbJ0FsbG93LUNvbnRyb2wtQWxsb3ctT3JpZ2luJ10gPSAnKic7XG4gICAgICAgIHJldHVybiBjYWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0YWNoO1xuICB9KVxuICAvLyBoZXJlIEkgd2FudCB0byBydW4gdGhpcyBldmVyeXRpbWVcbiAgLnJ1bigoJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkd2luZG93KSA9PiB7XG4gICAgLy8gd2hlbiB3ZSBzZWUgYSBzdGF0ZSBjaGFuZ2UgZnJvbSB0aGUgbG9jYXRpb24sIGxldCdzIGRvIHNvbWV0aGluZyFcbiAgICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCAoZXZlbnQsIHRvU3RhdGUsIEF1dGgpID0+IHtcbiAgICAgIGxldCBsb2dpbiA9IHRvU3RhdGUuZGF0YS5sb2dpbjtcbiAgICAgIGNvbnNvbGUubG9nKCduZWVkIHRvIGxvZyBpbj8nLCBsb2dpbik7XG4gICAgICBjb25zb2xlLmxvZygnaGFzIHRva2VuPycsICEhaGFzVG9rZW4pO1xuICAgICAgbGV0IGhhc1Rva2VuID0gJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tLndhbmRlcicpO1xuICAgICAgLy8gaGVyZSBpcyB3aGVyZSBJIHdhbnQgdG8gYWRkIHRoZSBjaGVjayBmb3IgdGhlIHRva2VuIVxuICAgICAgaWYobG9naW4gJiYgIWhhc1Rva2VuKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKCcvbG9naW4nKVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuIl19