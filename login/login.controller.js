(function(){
	'use strict';

	angular
		.module('presentation.login')
		.controller('LoginCtrl', loginCtrl);

	loginCtrl.$inject = ['$rootScope', '$location', 'loginProv'];

	function loginCtrl($rootScope, $location, loginProv) {
		var vm = this;

		vm.login = login;

		function login() {
			loginProv.login(vm.username, vm.password).then(
				function(data){
					$rootScope.$broadcast('login::successful', data);
					$location.path('account');
				}, function(error){
					vm.loginError = error;
				});
		}
	}
})();
