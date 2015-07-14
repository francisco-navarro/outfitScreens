'use strict';


angular.module('outfitScreensApp')
  .controller('ResourcesValueController',[  	
  	function () {

    var vm = this;

    vm.init = init;

    function init(resource){
        console.log('init value');
        console.log(resource);
    }
   
  }
]);
