/**
 * Created by tciogmarean on 18/03/16.
 */
(function(){
    'use strict';

    angular
        .module('presentation.settings')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {

        $stateProvider

            .state('settings', {
                abstract: true,
                url: '/settings',
                templateUrl: 'settings/settings.html'
            })

    }

})();
