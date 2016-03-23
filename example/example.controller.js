(function() {
    'use strict';

    angular.module('presentation.example')
        .controller('ExampleCtrl', ['$scope', ExampleCtrl]);

    function ExampleCtrl($scope) {
        $scope.text = "Testing this";
    }
})();