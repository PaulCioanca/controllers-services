'use strict';

angular.module('presentation', [
	'ui.router',
	'presentation.login'
	])
	.config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

}
