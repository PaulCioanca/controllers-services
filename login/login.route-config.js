/**
 * Created by tciogmarean on 18/03/16.
 */
(function(){
    'use strict';

    angular
        .module('presentation.login')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {

        $stateProvider

            .state('login', {
                url: '/',
                controller: 'LoginCtrl',
                controllerAs: 'loginCtrl',
                templateUrl: 'login/login.html'
            })

    }
})();