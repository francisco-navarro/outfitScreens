'use strict';

angular.module('outfitScreensApp')
    .factory('SectionsService', [
        '$q',
        '$http',
        '$timeout',
        'APP_CONSTANTS',
        function($q, $http, $timeout, APP_CONSTANTS) {

            var host = APP_CONSTANTS.ENDPOINT;
            var urlSections = '/sections/';
            var idMarket = 1;

            function list(sectionId) {
                return $q(function(resolve) {
                    $http.get(host + urlSections + sectionId)
                        .success(function(data) {
                            resolve(data);
                        });
                });
            }

            return {
                list: function(sectionId) {
                    return list(sectionId);
                }
            };
        }
    ]);
