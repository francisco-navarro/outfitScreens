'use strict';

angular.module('outfitScreensApp')
    .factory('SectionsService', [
        '$q',
        '$http',
        '$timeout',
        function($q, $http, $timeout) {

            var host = 'http://localhost:8080/commodities';
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
