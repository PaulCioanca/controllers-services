(function() {
	'use strict';

	angular
		.module('presentation.accountDashboard')
		.controller('AccountDashboardChild2Ctrl', accountDashboardChild2Ctrl);

	accountDashboardChild2Ctrl.$inject = [ '$scope' ];

	function accountDashboardChild2Ctrl($scope) {
		var self = this;

		self.message = undefined;
		self.broadcastToParent = broadcastToParent;

		function broadcastToParent() {
			self.message = "Event sent to parent";
			$scope.$emit('child::communication', "Child #2");
		}

		var parentEventListener = $scope.$on('parent::communication', function(event, data) {
			self.message = "Event received from " + data;
		});

		// CHILDREN CANNOT LISTEN TO EVENTS FROM OTHER CHILDREN
		var childEventListener = $scope.$on('child::communication', function(event, data) {
			self.message = "Event received from " + data;
		});

		$scope.$on('$destroy', function() {
			childEventListener();
			parentEventListener();
		});
	}
})();