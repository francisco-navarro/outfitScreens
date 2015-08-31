'use strict';


angular.module('outfitScreensApp')
    .factory('ResourcesService', [
        '$q',
        '$http',
        'APP_CONSTANTS',
        function($q, $http, APP_CONSTANTS) {

            var url = APP_CONSTANTS.ENDPOINT + 'resource/';

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
