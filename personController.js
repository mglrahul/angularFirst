/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.first_name = 'rahul';
    $scope.last_name = 'mangal';
    $scope.fullName = function() {
        return $scope.first_name + ' ' + $scope.last_name;
    };
});