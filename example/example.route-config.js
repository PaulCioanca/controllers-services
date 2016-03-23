(function () {
    'use strict';

    angular.module('presentation.example')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        $stateProvider
            .state('example', {
                url: '/example',
                templateUrl: 'example/example.html'
            })

    }
})();