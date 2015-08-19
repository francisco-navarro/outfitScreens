'use strict';


angular.module('outfitScreensApp')
    .factory('ResourcesService', [
        '$q',
        '$http',
        function($q, $http) {

            var url = 'http://localhost:8080/commodities/resource/';

            function find(id) {
                return $q(function(resolve) {
                    $http.get(url + id)
                        .success(function(data) {
                            resolve(data);
                        });
                });
            }

            return {
                find: function(id) {
                    return find(id);
                }
            };
        }
    ]);
