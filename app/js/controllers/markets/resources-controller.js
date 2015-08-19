'use strict';


angular.module('outfitScreensApp')
    .controller('ResourcesController', [
        'ResourcesService',
        function(ResourcesService) {

            var vm = this;
            vm.init = init;

            function init(marketSelected) {
                vm.resources = [];
                vm.marketSelected = marketSelected;
                // ResourcesService.find(8830)
                //     .then(function(data) {
                //         vm.resources = data.elements;
                //     });
            }

        }
    ]);
