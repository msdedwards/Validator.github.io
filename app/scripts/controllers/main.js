'use strict';

/**
 * @ngdoc function
 * @name validatorgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the validatorgithubioApp
 */
angular.module('validatorgithubioApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('../../syllogisms.json')
    .then(function(res)
    {
      $scope.syllogisms = res.data;
    });
  });
