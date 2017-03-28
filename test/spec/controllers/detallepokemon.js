'use strict';

describe('Controller: DetallepokemonCtrl', function () {

  // load the controller's module
  beforeEach(module('pokemonApp'));

  var DetallepokemonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetallepokemonCtrl = $controller('DetallepokemonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetallepokemonCtrl.awesomeThings.length).toBe(3);
  });
});
