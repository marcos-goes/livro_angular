angular.module('stockMarketApp')
    .directive('stockWidget',[function(){
        return {
            templateUrl: '40_transclude_stock.html',
            restrict: 'A',
            transclude: true,
            scope: {
                stockData: '='
            },

            link: function($scope, $element, $attrs){
                $scope.getChange = function(stock){
                    return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
                };
            }
        };
    }]);
