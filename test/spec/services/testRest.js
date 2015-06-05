'use strict';

//Testing Services Example
/*
 * 1. All tests usually start with describe
 * 2. Include the service name to be described in e.g describe('Service Name and some little description');
 */
describe('service: SampleService', function () {

  //Declare some of ur variables
  var MainCtrl;
  var rootScope;
  var httpBackEnd; //mock backend variable
  var testRest;

  // load the Service's module i.e. the module name of the main app
  beforeEach(module('simpleTestApp'));



  // Initialize the service, controller and a mock scope
  beforeEach(inject(function ($injector) {
    //This method uses injector.get method. See the controllers for a an alternative way of doing this
    httpBackEnd = $injector.get('$httpBackend');
    rootScope = $injector.get('$rootScope'); //rootScope = $rootScope.$new();
    testRest = $injector.get('SampleService');

  }));

  it('should attach a list of users to the scope', function () {
    var url='http://localhost:8080/openmrs/ws/rest/v1/user';
    httpBackEnd.expectGET(url).respond(200,function(data){data;});
    rootScope.test=testRest.getUser().get();
    httpBackEnd.flush();
    expect(rootScope.test).not.toBe(null);
  });
});
