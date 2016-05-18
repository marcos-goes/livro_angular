angular.module('stockMarketApp')
   .directive('validZip',[function(){
      var zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/g;
      return {
         restrict : 'E',
         require : 'ngModel',

         link: function($scope, $element, $attrs, ngModelCtrl) {
           ngModelCtrl.$validators.zip = function(value) {
             return zipCodeRegex.test(value);
           };
         }
         /*
         link : function($scope, $element, $attrs, ngModelCtrl){
            // Cuida da atualização do DOM --> Atualização do modelo
            ngModelCtrl.$parsers.unshift(function(value){
               var valid = zipCodeRegex.test(value);
               ngModelCtrl.$setValidity('validZip', valid);
               return valid ? value : undefined;
            });

            // Cuida da atualização do modelo --> DOM
            ngModelCtrl.$formatters.unshift(function(value){
               var valid = zipCodeRegex.test(value);
               ngModelCtrl.$setValidity('validZip', valid);
               return value;
            });
         }
         */
      };
   }]);
