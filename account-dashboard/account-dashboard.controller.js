(function() {
	'use strict';

	angular
		.module('presentation.accountDashboard')
		.controller('AccountDashboardCtrl', AccountDashboardCtrl);

	AccountDashboardCtrl.$inject = [ '$scope' ];

	function AccountDashboardCtrl($scope) {
		var self = this;

		self.message = undefined;
		self.broadcastToChildren = broadcastToChildren;

		function broadcastToChildren() {
			self.message = "Event sent to children";
			$scope.$broadcast('parent::communication', "parent");
		}

		var childEventListener = $scope.$on('child::communication', function(event, data) {
			self.message = "Event received from " + data;
		});

		$scope.$on('$destroy', function() {
			childEventListener();
		});
	}
})();