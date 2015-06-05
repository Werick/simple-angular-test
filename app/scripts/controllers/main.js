'use strict';

/**
 * @ngdoc function
 * @name simpleTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleTestApp
 */
angular.module('simpleTestApp')
  .controller('MainCtrl', ['$scope', 'SampleService', function ($scope,SampleService) {

    $scope.test=SampleService.getUser().get(function(data){
      data;
      console.log(data);

    });
  }]);
