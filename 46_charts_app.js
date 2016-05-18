angular.module('googleChartApp',[])
   .controller('MainCtrl',[function(){
      var self = this;
      self.pieChartData = [
         {label: 'First', value: 25},
         {label: 'Second', value: 54},
         {label: 'Third', value: 75},
         {label: 'Fourth', value: 8}
      ];

      self.pieChartConfig = {
         title: 'One Two Three Four Chart',
         firstColumnHeader: 'Counter',
         secondColumnHeader: 'Actual Value'
      };

      self.changeData = function(){
         self.pieChartData[1].value = 29;
      };
   }]);
