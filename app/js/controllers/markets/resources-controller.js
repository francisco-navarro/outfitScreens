'use strict';


angular.module('outfitScreensApp')
    .controller('ResourcesController', [
        '$rootScope',
        'ResourcesService',
        function($rootScope, ResourcesService) {

            var vm = this;
            vm.init = init;

            function init() {
                vm.resources = [];
            }

            function findResources(id) {
                ResourcesService.find(id)
                    .then(function(data) {
                        vm.resources = data.elements;
                    });
            }

            $rootScope.$on('subsectionSelected', function(event, selected) {
                vm.subsectionSelected = selected;   
                        
            });

        }
    ]);
