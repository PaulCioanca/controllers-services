'use strict';

angular.module('presentation.login', [
	'ui.router'
	])
	.config(routeConfig)
    .config(loginConfig);

function routeConfig($stateProvider) {

    $stateProvider
        
        .state('login', {
            url: '/',
            controller: 'LoginCtrl',
            controllerAs: 'loginCtrl',
            templateUrl: 'login/login.html'
        })
        
}

function loginConfig(loginProvProvider) {
    loginProvProvider.loginUrl = 'login/users.json';
}