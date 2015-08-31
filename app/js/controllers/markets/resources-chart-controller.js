'use strict';


angular.module('outfitScreensApp')
    .controller('ResourcesChartController', [
    	'$rootScope', 
    	'$timeout',
        function($rootScope,$timeout) {

            var vm = this;
            
            var chart1 = {};
		    chart1.type = 'AreaChart';
		    chart1.cssStyle = 'height:400px; width:900px;';
		    

		    chart1.options = {
			    //title: 'Values per month',			    
			    displayExactValues: true,
			    legend:'none',
			    vAxis: {
			        gridlines: {'count': 6}
			    },
			    timeline: {
		          groupByRowLabel: true
		        },
			    hAxis: {
			        format: 'M/d/yy hh:mm',
			        title: '',
			        viewWindow: {
			          //  min: new Date(1436809522000),
			           // max:  new Date(1436966400000)
			          },
		          gridlines: {
		            count: 5,
		             units: {
			              hours: {format: ['hh:mm:ss a', 'HH:mm']},
			              minutes: {format: ['HH:mm a Z', 'HH:mm']}
			            }
		          }
			    }
			};

            vm.init = init;
            vm.load = load;
            vm.animateElementIn = animateElementIn;
            vm.animateElementOut = animateElementOut;

            function init(){
            	chart1.data = {'cols': [
			        {id: 'date', label: 'Date', type: 'date'},
			        {id: 'value', type: 'number'},
			        {type: 'string', role: 'tooltip'}
		    	], 'rows': []};
            }

            function load(resource) {                
                chart1.data.cols[1].label = 'petroleo';
                vm.chart = chart1;
                vm.resource =  resource;
                chart1.data.rows = resource.data;
            }

            function animateElementIn($el) {
                $el.removeClass('hidden');
                $el.addClass('animated fadeInUp');
            }

            function animateElementOut($el) {
                $el.addClass('hidden');
                $el.removeClass('animated fadeInUp');
            }

            $rootScope.$on('tableSelected', function() {
            	init();
            });


        }
    ]);
