(function() {
	'use strict';

	angular
		.module('presentation.accountDashboard')
		.controller('AccountDashboardCtrl', accountDashboardParentCtrl)
		.controller('AccountDashboardChild1Ctrl', accountDashboardChild1Ctrl)
		.controller('AccountDashboardChild2Ctrl', accountDashboardChild2Ctrl);


	accountDashboardParentCtrl.$inject = [ '$scope' ];
	function accountDashboardParentCtrl($scope) {
		var self = this;

		self.message = undefined;
		self.broadcastToChildren = broadcastToChildren;

		function broadcastToChildren() {
			self.message = "Event sent to children";
			$scope.$broadcast('parent::communication', "parent");
		}

		$scope.$on('child::communication', function(event, data) {
			self.message = "Event received from " + data;
		});
	}


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


	accountDashboardChild2Ctrl.$inject = [ '$scope' ];
	function accountDashboardChild2Ctrl($scope) {
		var self = this;

		self.message = undefined;
		self.broadcastToParent = broadcastToParent;

		function broadcastToParent() {
			self.message = "Event sent to parent";
			$scope.$emit('child::communication', "Child #2");
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