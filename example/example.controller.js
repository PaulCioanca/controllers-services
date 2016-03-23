(function() {
    'use strict';

    angular.module('presentation.example')
        .controller('ExampleCtrl', ExampleCtrl);

    ExampleCtrl.$inject = ['$scope'];
    function ExampleCtrl($scope) {
        $scope.text = "Testing this";
    }
})();