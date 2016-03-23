/**
 * Created by tciogmarean on 20/03/16.
 */
(function() {
    'use strict';

    angular
        .module('presentation.accountDashboard')
        .config(routeConfig);

    function routeConfig($stateProvider) {
        $stateProvider
            .state('account', {
                url: '/account',
                controller: 'AccountDashboardCtrl',
                controllerAs: 'vm',
                templateUrl: 'account-dashboard/account-dashboard.html'
            })
    }
})();