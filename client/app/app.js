angular.module('wander', ['ui.router', 'login', 'create', 'main'])
  .config(($httpProvider, $stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('login');

    $stateProvider
      .state('login', {
        templateUrl: '../app/login/login.html',
        url: '/login',
        controller: 'loginController',
        data: {
          login: false
        }
      })
      .state('create', {
        templateUrl: '../app/createUser/create.html',
        url: '/create',
        controller: 'createUserController',
        data: {
          login: false
        }
      })
      .state('home', {
        templateUrl: '../app/main/homepage.html',
        url: '/home',
        controller: 'wanderController',
        data: {
          login: true
        }
      });

      $httpProvider.interceptors.push('Authorize');
  })
  .controller('headerController', ($scope, $window, $location) => {
    $scope.logout = () => {
      $window.localStorage.removeItem('com.wander');
      $location.path('/login');
    }
  })
  .factory('Authorize', ($window) => {
    let attach = {
      req: (call) => {
        let token = $window.localStorage.getItem('com.wander');
        if (token) {
          call.headers['x-access-token'] = token;
        }
        call.headers['Allow-Control-Allow-Origin'] = '*';
        return call;
      }
    }
    return attach;
  })
  // here I want to run this everytime
  .run(($rootScope, $location, $window) => {
    // when we see a state change from the location, let's do something!
    $rootScope.$on('$stateChangeStart', (event, toState, Auth) => {
      let login = toState.data.login;
      console.log('need to log in?', login);
      console.log('has token?', !!hasToken);
      let hasToken = $window.localStorage.getItem('com.wander');
      // here is where I want to add the check for the token!
      if(login && !hasToken) {
        $location.path('/login')
      } else {

      }
    })
  });
