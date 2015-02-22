'use strict';

/**
 * @ngdoc overview
 * @name validatorgithubioApp
 * @description
 * # validatorgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('validatorgithubioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/syllogism',{
        templateUrl: 'views/syllogism.html',
        controller: 'SyllogismCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
