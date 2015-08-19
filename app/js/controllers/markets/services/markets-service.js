'use strict';

angular.module('outfitScreensApp')
    .factory('MarketsService', [
        '$q',
        '$http',
        '$timeout',
        function($q, $http,$timeout) {

            var url = 'http://localhost:8080/commodities/markets/';

            var staticList = [ 
                { title : 'Materias Primas', id: 1},
                { title : 'Índices', id: 2 },
                { title : 'Divisas', id: 3 },
                { title : 'Acciones', id:4 }];

            function list() {
                var defered = $q.defer(); 
                $timeout(defered.resolve(staticList));
                return defered.promise;
            }

            return {
                list: function() {
                    return list();
                }
            };
        }
    ]);
