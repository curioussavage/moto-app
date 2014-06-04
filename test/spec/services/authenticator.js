'use strict';

describe('Service: Authenticator', function () {

  // load the service's module
  beforeEach(module('motoAppApp'));

  // instantiate service
  var Authenticator;
  beforeEach(inject(function (_Authenticator_) {
    Authenticator = _Authenticator_;
  }));

  it('should do something', function () {
    expect(!!Authenticator).toBe(true);
  });

});
