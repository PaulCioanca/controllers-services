/**
 * Created by tciogmarean on 18/03/16.
 */
(function(){
    'use strict';

    angular
        .module('presentation.settings.editMenuItems')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {

        $stateProvider
            .state('settings.editMenuItems', {
                url: '/edit-menu-items',
                controller: 'EditMenuItemsCtrl',
                controllerAs: 'vm',
                templateUrl: 'settings/edit-menu-items/edit-menu-items.html'
            })

    }

})();