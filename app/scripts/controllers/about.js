'use strict';

/**
 * @ngdoc function
 * @name simpleTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleTestApp
 */
angular.module('simpleTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
