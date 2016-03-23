(function() {
	'use strict';

	angular
		.module('presentation.accountDashboard')
		.controller('AccountDashboardChild2Ctrl', AccountDashboardChild2Ctrl);

	AccountDashboardChild2Ctrl.$inject = [ '$scope' ];

	function AccountDashboardChild2Ctrl($scope) {
		var vm = this;

		vm.selectedFruit = "";

		var parentEventListener = $scope.$on('parent::communication', function(event, data) {
			vm.selectedFruit = data;
		});

		var childEventListener = $scope.$on('child::communication', function(event, data) {
			console.log(data);
			vm.selectedFruit = data;
		});

		$scope.$on('$destroy', function() {
			childEventListener();
			parentEventListener();
		});
	}
})();