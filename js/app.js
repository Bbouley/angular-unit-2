var app = angular.module('controllerApp', ['filters', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: '../partials/dogs.html',
        controller: 'DogsController'
      })
      .when('/api', {
        templateUrl: '../partials/api.html',
        controller: 'apiController'
      })
      .when('/*', {
        templateUrl : '../index.html',
      });
});


