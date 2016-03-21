(function() {
	'use strict';

	angular
		.module('presentation.accountDashboard')
		.controller('AccountDashboardCtrl', accountDashboardController);

	accountDashboardController.$inject = [ '$rootScope' ];

	function accountDashboardController($rootScope) {
		var self = this;

		self.currentUser = undefined;

		$rootScope.$on('login::successful', function(event, userData) {
			self.currentUser = userData;
		});
	}
}());