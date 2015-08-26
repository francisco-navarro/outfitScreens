'use strict';


angular.module('outfitScreensApp')
    .controller('ResourcesController', [
        '$rootScope',
        'ResourcesService',
        function($rootScope, ResourcesService) {

            var vm = this;
            vm.init = init;
            vm.findResource = findResource;

            function init() {
                vm.resources = [];
            }

            function findResource(elem) {
                ResourcesService.find(elem)
                    .then(function(data) {
                        if (data.elements[0].name) {
                            vm.resources.push(data.elements[0]);
                        }
                    });
            }

            $rootScope.$on('tableSelected', function(event, table) {
                vm.resources = [];
                vm.table = table;
                table.resources.forEach(findResource);
            });

        }
    ]);
