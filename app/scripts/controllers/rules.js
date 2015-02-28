'use strict';

/**
 * @ngdoc function
 * @name validatorgithubioApp.controller:RulesCtrl
 * @description
 * # RulesCtrl
 * Controller of the validatorgithubioApp
 */
angular.module('validatorgithubioApp')
  .controller('RulesCtrl', function ($scope) {
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
