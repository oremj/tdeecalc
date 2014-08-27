'use strict';

/**
 * @ngdoc directive
 * @name tdeecalcApp.directive:tdeeActivityRow
 * @description
 * # tdeeActivityRow
 */
angular.module('tdeecalcApp')
  .directive('tdeeActivityRow', function () {
    return {
      restrict: 'A',
      scope: {
          bmr: '=',
          desc: '@',
          goalLbs: '=',
          mult: '='
      },
      templateUrl: 'views/activity-row.html'
    };
  });
