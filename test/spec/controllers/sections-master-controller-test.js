'use strict';

describe('Controller: AboutCtrl', function() {

    // load the controller's module
    beforeEach(module('outfitScreensApp'));

    var vm, SectionsService;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $q) {
        SectionsService = {
            list: function() {
                return $q.defer().promise;
            }
        };
        vm = $controller('SectionsMasterController', {
            $rootScope: $rootScope,
            SectionsService: SectionsService
        });
    }));

    it('should init Section master controller', function() {
    
        vm.init(2);
    });
});
