var app1 = angular.module('app1', []);

app1.controller('crtl1', function($scope) {
    $scope.first = 1;
    $scope.second = 1;
    $scope.third = 1;
    $scope.fourth = 1;

    $scope.multiplyValue = function () {
        $scope.product = $scope.first + ' * ' + $scope.second + " = " + (+$scope.first * +$scope.second);
    };
    
     $scope.addValue = function () {
        $scope.sum = $scope.third + ' + ' + $scope.fourth + " = " + (+$scope.third + +$scope.fourth);
     };
});