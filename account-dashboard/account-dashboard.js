(function(angular) {
    'use strict';
    angular.module('presentation.accountDashboard', [
        'ui.router'
    ])
    .config(routeConfig);

    function routeConfig($stateProvider) {
        $stateProvider
            .state('account', {
                url: '/account',
                controller: 'AccountDashboardCtrl',
                controllerAs: 'AccountDashboardCtrl',
                templateUrl: 'account-dashboard/account-dashboard.html'
            })

    }

}(window.angular));