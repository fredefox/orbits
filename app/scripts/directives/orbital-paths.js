'use strict';

/**
 * @ngdoc directive
 * @name orbitsApp.directive:orbitalPaths
 * @description
 * # orbitalPaths
 */
angular.module('orbitsApp')
  .directive('orbitalPaths',
    [ '$http'
    , 'constants'
    , function ($http, constants) {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        var svg = d3
            .select(element[0])
            .append('svg')
            .attr('width', 400)
            .attr('height', 400);
        var min = Math.sqrt(1-Math.pow(0.0167, 2));
        svg.append('ellipse')
            .attr('cx', 100+(0.0167*100))
            .attr('cy', 100)
            .attr('rx', 100)
            .attr('ry', min*100)
            .style('stroke','blue');
        $http(
            { cache: true
            , url: constants.data.endpoint
            , method: 'GET'
            }).success(function(data) {
                data = data.split("\n");
                data.forEach(function(row) {
                    var ecc = Number(row.slice(71, 79));
                    var maj = Number(row.slice(93, 103));
                    var min = maj * Math.sqrt(1-Math.pow(ecc, 2));
                    var el = svg.append('ellipse')
                        .attr('cx', 100+(maj*ecc*100))
                        .attr('cy', 100)
                        .attr('rx', maj*100)
                        .attr('ry', min*100);
                    if(min < 1.3) {
                        el.style('stroke', 'red');
                    }
                });
            });
        //element.text('this is the orbitalPaths directive');
      }
    };
  }]);
