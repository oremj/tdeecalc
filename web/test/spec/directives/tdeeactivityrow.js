'use strict';

describe('Directive: tdeeActivityRow', function () {

  // load the directive's module
  beforeEach(module('tdeecalcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tdee-activity-row></tdee-activity-row>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tdeeActivityRow directive');
  }));
});
