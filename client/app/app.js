angular.module('wander', ['ui.router', 'login', 'create'])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('login', {
        templateUrl: '../app/login/login.html',
        url: '/login',
        controller: 'loginController'
      })
      .state('create', {
        templateUrl: '../app/createUser/create.html',
        url: '/create',
        controller: 'createUserController'
      })
      .state('home', {
        templateUrl: '../app/main/homepage.html',
        url: '/home',
        controller: 'wanderController'
      });
  })
  .controller('wanderController', ($scope) => {
    $scope.hi = 'hi';
  });
