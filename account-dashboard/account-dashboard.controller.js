(function() {
	'use strict';

	angular
		.module('presentation.accountDashboard')
		.controller('AccountDashboardCtrl', accountDashboardController);

	function accountDashboardController($rootScope) {
		this.currentUser = null;

		$rootScope.$on('login::successful', function(event, userData) {
			this.currentUser = userData;
		}.bind(this));
	}
}());