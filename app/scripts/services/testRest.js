/**
 * Created by developer on 6/2/15.
 */
'use strict';

angular.module('simpleTestApp')
.factory('SampleService',['$resource','$http', function($resource,$http){
  var service = {};

  var url = 'http://localhost:8080/openmrs/ws/rest/v1/';

  function getSession()
  {

    return $resource(url+'session');

  };

  service.getUser = function()
  {
    var authdata=btoa('admin' + ':' + 'Admin123');
    $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
    return $resource(url+'user');
  };


  return service;
}]);
