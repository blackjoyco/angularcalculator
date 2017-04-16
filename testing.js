//Defining the Angular Module
var app1 = angular.module('app1', []);

//Define the first controller and the factory function
app1.controller('math', function($scope) {
    $scope.first = 1;
    $scope.second = 1;
    $scope.third = 1;
    $scope.fourth = 1;
    
    //Define the multiplyValue function that binds to a button
    $scope.multiplyValue = function () {
        $scope.product = $scope.first + ' * ' + $scope.second + " = " + (+$scope.first * +$scope.second);
    };
     //Define the addValue function that binds to a button
     $scope.addValue = function () {
        $scope.sum = $scope.third + ' + ' + $scope.fourth + " = " + (+$scope.third + +$scope.fourth);
     };
});