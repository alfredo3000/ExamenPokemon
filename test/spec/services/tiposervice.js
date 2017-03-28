'use strict';

describe('Service: tiposervice', function () {

  // load the service's module
  beforeEach(module('pokemonApp'));

  // instantiate service
  var tiposervice;
  beforeEach(inject(function (_tiposervice_) {
    tiposervice = _tiposervice_;
  }));

  it('should do something', function () {
    expect(!!tiposervice).toBe(true);
  });

});
