angular.module('stockMarketApp')
    .directive('stockWidget',[function(){
        return {
            templateUrl: '38_directive_stock.html',
            restrict: 'AE',
            scope: {
                stockData: '='
            },
            
            link: function($scope, $element, $attrs){
                $scope.getChange = function(stock){
                    return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
                };
                $scope.changeStock = function(){
                    $scope.stockData = {name: 'Directive Stock', price: 500, previous: 200};
                };                
            }
        };
    }]);