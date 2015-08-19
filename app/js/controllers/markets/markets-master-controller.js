'use strict';


angular.module('outfitScreensApp')
    .controller('MarketsMasterController', [
        'MarketsService',
        function(MarketsService) {

            var vm = this;
            vm.init = init;
            vm.select = select;

            vm.markets = [];

            function init() {
                console.log('init MarketsController');
                vm.selected = 1;
                MarketsService.list()
                    .then(function(data) {
                        console.log(data);
                        vm.markets = data;
                    });
            }

            function select(market) {
                vm.selected = market;
            }

        }
    ]);
