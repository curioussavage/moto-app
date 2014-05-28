'use strict';

describe('Service: Makeandmodel', function () {

  // load the service's module
  beforeEach(module('motoAppApp'));

  // instantiate service
  var Makeandmodel;
  beforeEach(inject(function (_Makeandmodel_) {
    Makeandmodel = _Makeandmodel_;
  }));

  it('should do something', function () {
    expect(!!Makeandmodel).toBe(true);
  });

});
