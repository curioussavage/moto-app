'use strict';

describe('Service: Sell', function () {

  // load the service's module
  beforeEach(module('motoAppApp'));

  // instantiate service
  var Sell;
  beforeEach(inject(function (_Sell_) {
    Sell = _Sell_;
  }));

  it('should do something', function () {
    expect(!!Sell).toBe(true);
  });

});
