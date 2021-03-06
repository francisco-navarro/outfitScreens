'use strict';


angular.module('outfitScreensApp')
    .controller('SectionsMasterController', [
        '$rootScope',
        'SectionsService',
        function($rootScope, SectionsService) {

            var vm = this;
            vm.init = init;
            vm.select = select;
            vm.unselect = unselect;

            vm.sections = [];

            function init(id) {
                console.log(SectionsService);
                vm.selected = undefined;
                SectionsService.list(id)
                    .then(function(data) {
                        vm.sections = data;
                    });
            }

            function select(value) {
                vm.selected = value;
                $rootScope.$emit('sectionSelected', value);
            }

            function unselect() {
                vm.selected = value;                
            }

        }
    ]);
