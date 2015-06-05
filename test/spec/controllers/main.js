'use strict';

//Testing Services Example
/*
 * 1. All tests usually start with describe
 * 2. Include the service name to be described in e.g describe('Service Name and some little description');
 */
describe('controller: MainCtrl', function () {

  //Declare some of ur variables
  var MainCtrl;
  var rootScope;
  var httpBackend; //mock backend variable
  var testRest;

  // load the Service's module i.e. the module name of the main app
  beforeEach(module('simpleTestApp'));



  // Initialize the service, controller and a mock scope
  beforeEach(inject(function ($rootScope,$controller,SampleService,$httpBackend) {
    httpBackend = $httpBackend;
    rootScope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: rootScope,SampleService:SampleService
    });
  }));

  it('should attach a list of users to the scope', function () {
    var url='http://localhost:8080/openmrs/ws/rest/v1/user';
    httpBackend.expectGET(url).respond(200,function(data){
      data;
      console.log(data);
    });
    MainCtrl;
    httpBackend.flush();
    expect(rootScope.test.results).not.toBe(null);
  });
});
