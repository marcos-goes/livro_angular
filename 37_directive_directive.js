angular.module('stockMarketApp')
    .directive('stockWidget',[function(){
        return {
            templateUrl: '37_directive_stock.html',
            restrict: 'AE'
        };
    }]);