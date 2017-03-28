'use strict';

describe('Controller: ListaportipoCtrl', function () {

  // load the controller's module
  beforeEach(module('pokemonApp'));

  var ListaportipoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaportipoCtrl = $controller('ListaportipoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListaportipoCtrl.awesomeThings.length).toBe(3);
  });
});
