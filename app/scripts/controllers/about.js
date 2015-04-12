'use strict';

/**
 * @ngdoc function
 * @name orbitsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the orbitsApp
 */
angular.module('orbitsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
