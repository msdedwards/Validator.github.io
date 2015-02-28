'use strict';

/**
 * @ngdoc function
 * @name validatorgithubioApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the validatorgithubioApp
 */
angular.module('validatorgithubioApp')
  .controller('SearchCtrl', function ($scope) {
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
