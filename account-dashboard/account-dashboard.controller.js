(function(angular) {
	'use strict';

	angular
		.module('presentation.accountDashboard')
		.controller('AccountDashboardCtrl', accountDashboardController);

	function accountDashboardController($rootScope) {
		this.currentUser = null;
		this.currentUser = {
			name: "John"
		};

		$rootScope.$on('login::successful', function(event, userData) {
			this.currentUser = userData;
		}.bind(this));
	}
}(window.angular));