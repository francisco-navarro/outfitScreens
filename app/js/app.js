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
        'googlechart',
        'angular-scroll-animate'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/markets', {
                templateUrl: 'html/markets/sections.html',
                controller: 'SectionsMasterController'
            })
            .when('/stock-exchange', {
                templateUrl: 'html/stock-exchange/stock-exchange.html',
                controller: 'StockExchangeController'
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
