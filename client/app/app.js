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
      request: function (object) {
        // retrieves any old token from the browser storage locally
        let jwt = $window.localStorage.getItem('com.wander');
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
  .run(($rootScope, $location, $window) => {
    // when we see a state change from the location, let's do something!
    $rootScope.$on('$stateChangeStart', (event, toState, Auth) => {
      let login = toState.data.login;
      let hasToken = $window.localStorage.getItem('com.wander');
      // here is where I want to add the check for the token!
      if(login && !hasToken) {
        $location.path('/login')
      } else {

      }
    })
  });
