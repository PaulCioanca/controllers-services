(function() {
	'use strict';

	angular
		.module('presentation.accountDashboard')
		.controller('AccountDashboardChild1Ctrl', accountDashboardChild1Ctrl);

	accountDashboardChild1Ctrl.$inject = [ '$scope' ];

	function accountDashboardChild1Ctrl($scope) {
		var self = this;

		self.message = undefined;
		self.broadcastToParent = broadcastToParent;

		function broadcastToParent() {
			self.message = "Event sent to parent";
			$scope.$emit('child::communication', "Child #1");
		}

		$scope.$on('parent::communication', function(event, data) {
			self.message = "Event received from " + data;
		});

		// CHILDREN CANNOT LISTEN TO EVENTS FROM OTHER CHILDREN
		$scope.$on('child::communication', function(event, data) {
			self.message = "Event received from " + data;
		});
	}
}());