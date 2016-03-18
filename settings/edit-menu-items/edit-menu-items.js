(function(angular) {
    'use strict';

    angular.module('presentation.settings.editMenuItems', [
            'ui.router'
        ])
        .config(routeConfig);

    function routeConfig($stateProvider) {

        $stateProvider
            .state('settings.editMenuItems', {
                url: '/edit-menu-items',
                controller: 'EditMenuItemsCtrl',
                controllerAs: 'EditMenuItemsCtrl',
                templateUrl: 'settings/edit-menu-items/edit-menu-items.html'
            })

    }
})(window.angular);