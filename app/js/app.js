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
    'toaster'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'html/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'html/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('outfitScreensApp')
  .controller('infoAppCtrl',
    function ($scope, toaster) {

      $scope.init = function(){
        console.log(toaster);       
      };

      $scope.info = function(){
        console.log(toaster.pop);
        toaster.success({title: "title", body:"text1"});
      };
  });
