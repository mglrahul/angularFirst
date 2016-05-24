/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//var app = ;
angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name: 'test_name1', country: 'test_country1'},
        {name: 'test_name2', country: 'test_country2'},
        {name: 'test_name3', country: 'test_country3'}
    ];
});