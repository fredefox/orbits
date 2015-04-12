'use strict';

describe('Directive: orbitalPaths', function () {

  // load the directive's module
  beforeEach(module('orbitsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<orbital-paths></orbital-paths>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the orbitalPaths directive');
  }));
});
