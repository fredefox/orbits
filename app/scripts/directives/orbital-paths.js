'use strict';

/**
 * @ngdoc directive
 * @name orbitsApp.directive:orbitalPaths
 * @description
 * # orbitalPaths
 */
angular.module('orbitsApp')
  .directive('orbitalPaths', function () {
    return {
      template: '<svg></svg>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          debugger;
        element.text('this is the orbitalPaths directive');
      }
    };
  });
