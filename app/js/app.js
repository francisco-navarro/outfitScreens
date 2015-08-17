'use strict';

/**
 * @ngdoc overview
 * @name outfitScreensApp
 * @description
 * # outfitScreensApp
 *
 * Main module of the application.
 */
angular
    .module('outfitScreensApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'toaster',
        'googlechart'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/markets', {
                templateUrl: 'html/markets.html',
                controller: 'MarketsController'
            })
            .otherwise({
                redirectTo: '/markets'
            });
    });

angular.module('outfitScreensApp')
    .controller('infoAppCtrl',
        function($scope, toaster) {

            $scope.init = function() {
                console.log('init application');
            };

            $scope.info = function() {
                console.log(toaster.pop);
                toaster.success({
                    title: '"title"',
                    body: '"text1"'
                });
            };
        });
