/**
 * Created by tciogmarean on 18/03/16.
 */
(function(){
    'use strict';

    angular
        .module('presentation.settings.editAccount')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {

        $stateProvider
            .state('settings.editAccount', {
                url: '',
                controller: 'EditAccountCtrl',
                controllerAs: 'vm',
                templateUrl: 'settings/edit-account/edit-account.html'
            })

    }

})();