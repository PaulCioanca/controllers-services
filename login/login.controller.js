(function(){
	'use strict';

	angular
		.module('presentation.login')
		.controller('LoginCtrl', LoginCtrl);

	LoginCtrl.$inject = ['$rootScope', '$location', 'loginProv'];

	function LoginCtrl($rootScope, $location, loginProv) {
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
