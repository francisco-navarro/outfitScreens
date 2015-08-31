'use strict';


angular.module('outfitScreensApp')
    .controller('SubSectionsController', [
        '$rootScope',
        'SectionsService',
        function($rootScope, SectionsService) {

            var vm = this;

            vm.init = init;
            vm.selectTable = selectTable;

            function init(parent) {
                vm.parent = parent;
            }

            function selectTable(table) {
                vm.table = table;
                $rootScope.$emit('tableSelected', table);
            }

            $rootScope.$on('sectionSelected', function(event, section) {
                vm.subSections = [];
                SectionsService.list(section.id)
                    .then(function(subSections) {
                        vm.subSections = subSections;
                    });
            });

        }
    ]);
