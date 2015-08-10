'use strict';


angular.module('outfitScreensApp')
    .controller('ResourcesController', [
        'ResourcesService',
        function(ResourcesService) {

            var vm = this;
            vm.init = init;

            vm.resources = [];

            function init() {
                ResourcesService.find()
                    .then(function(data) {
                        vm.resources = data.elements;
                    });
            }

        }
    ]);
