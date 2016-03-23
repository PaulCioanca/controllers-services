(function() {
    'use strict';

    angular.module('presentation.example')
        .controller('ExampleChildCtrl', ExampleTextCtrl);

    ExampleTextCtrl.$inject = ['$scope'];
    function ExampleTextCtrl($scope) {
        $scope.text2 = 'Testing 2';
    }
})();