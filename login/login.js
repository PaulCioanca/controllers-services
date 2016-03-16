'use strict';

angular.module('presentation.login', [
	'ui.router'
	])
	.config(routeConfig);

function routeConfig($stateProvider) {

    $stateProvider
        
        .state('login', {
            url: '/',
            controller: 'LoginCtrl',
            controllerAs: 'loginCtrl',
            templateUrl: 'login/login.html'
        })
        
}