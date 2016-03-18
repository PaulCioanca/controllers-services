'use strict';

angular.module('presentation', [
	'ui.router',
	'presentation.login',
	'presentation.navbar',
	'presentation.settings',
	'presentation.accountDashboard'
	])
	.config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

}
