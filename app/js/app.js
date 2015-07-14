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
      .when('/resources', {
        templateUrl: 'html/resources.html',
        controller: 'ResourcesController'
      })      
      .otherwise({
        redirectTo: '/resources'
      });
  });

angular.module('outfitScreensApp')
  .controller('infoAppCtrl',
    function ($scope, toaster) {

      $scope.init = function(){ 
        console.log('init application');
      };

      $scope.info = function(){
        console.log(toaster.pop);
        toaster.success({title: '"title"', body:'"text1"'});
      };
  });
