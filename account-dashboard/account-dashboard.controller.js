(function() {
	'use strict';

	angular
		.module('presentation.accountDashboard')
		.controller('AccountDashboardCtrl', AccountDashboardCtrl);

	AccountDashboardCtrl.$inject = [ '$scope' ];

	function AccountDashboardCtrl($scope) {
		var vm = this;

		vm.selectedFruit = "";
		vm.broadcastToChildren = broadcastToChildren;

		vm.fruits = ['Apple', 'Pear', 'Orange', 'Banana', 'Avocado'];

		function broadcastToChildren() {
			$scope.$broadcast('parent::communication', vm.selectedFruit);
		}

		var childEventListener = $scope.$on('child::communication', function(event, data) {
			vm.selectedFruit = data;
		});

		$scope.$on('$destroy', function() {
			childEventListener();
		});
	}
})();