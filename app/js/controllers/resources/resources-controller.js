'use strict';


angular.module('outfitScreensApp')
  .controller('ResourcesController',[
  	'ResourcesService',
  	function (ResourcesService) {

  	var vm = this;
  	vm.init = init;

  	vm.resources = [];
  	

  	function init(){
  		 console.log('ResourcesController controller iniciado');
  		 ResourcesService.find()
  		 	.then(function(data) {
  		 		vm.resources = data.elements;
  		 	});
  	}
	
   
  }
]);
