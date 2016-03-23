(function() {
    'use strict';

    angular.module('presentation.example')
        .controller('ExampleChildCtrl', ['$scope', ExampleTextCtrl]);

    function ExampleTextCtrl($scope) {
        $scope.childText = 'Testing 2';
    }
})();