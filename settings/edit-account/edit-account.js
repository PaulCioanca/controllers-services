(function(angular) {
    'use strict';

    angular.module('presentation.settings.editAccount', [
            'ui.router'
        ])
        .config(routeConfig);

    function routeConfig($stateProvider) {

        $stateProvider
            .state('settings.editAccount', {
                url: '',
                templateUrl: 'settings/edit-account/edit-account.html'
            })

    }
})(window.angular);