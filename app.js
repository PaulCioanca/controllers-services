'use strict';

angular.module('presentation', [
	'ui.router',
	'presentation.login',
	'presentation.navbar',
	'presentation.settings'
	])
	.config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

}
