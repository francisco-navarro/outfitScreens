'use strict';


angular.module('outfitScreensApp')
    .factory('ResourcesService', [
        '$q',
        '$http',
        function($q, $http) {

            var url = 'http://localhost:9000/mock/resources.json';

            function find() {
                return $q(function(resolve) {
                    $http.get(url).success(function(data) {
                        resolve(data);
                    });
                });
            }

            return {
                find: function() {
                    return find();
                }
            };
        }
    ]);
