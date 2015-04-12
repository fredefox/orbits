'use strict';

/**
 * @ngdoc service
 * @name orbitsApp.constants
 * @description
 * # constants
 * Constant in the orbitsApp.
 */
angular.module('orbitsApp')
  .constant('constants', {
    'data': {
      // 'endpoint': 'http://minorplanetcenter.net/iau/MPCORB/NEA.txt'
      'endpoint': 'assets/NEA.txt'
    }
  });
