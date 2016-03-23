(function() {
	'use strict';

	angular
		.module('presentation.accountDashboard')
		.controller('AccountDashboardChild1Ctrl', AccountDashboardChild1Ctrl);

	AccountDashboardChild1Ctrl.$inject = [ '$scope' ];

	function AccountDashboardChild1Ctrl($scope) {
		var vm = this;

		vm.selectedFruit = "";
		vm.emitChangeEvent = emitChangeEvent;

		function emitChangeEvent() {
			$scope.$emit('child::communication', vm.selectedFruit);
		}

		var parentEventListener = $scope.$on('parent::communication', function(event, data) {
			vm.selectedFruit = data;
		});

		var childEventListener = $scope.$on('child::communication', function(event, data) {
			vm.selectedFruit = data;
		});

		$scope.$on('$destroy', function() {
			childEventListener();
			parentEventListener();
		});
	}
})();