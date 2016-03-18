(function(angular) {
    'use strict';

    angular.module('presentation.settings', [
            'ui.router',
            'presentation.settings.editAccount',
            'presentation.settings.editMenuItems'
        ])
        .config(routeConfig);

    function routeConfig($stateProvider) {

        $stateProvider

            .state('settings', {
                abstract: true,
                url: '/settings',
                templateUrl: 'settings/settings.html'
            })

    }
})(window.angular);