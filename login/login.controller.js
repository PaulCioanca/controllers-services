(function(){
	'use strict';

	angular
		.module('presentation.login')
		.controller('LoginCtrl', loginCtrl);

	function loginCtrl($rootScope, $location, loginProv) {
		var self = this;

		self.username = undefined;
		self.password = undefined;
		self.loginError = undefined;
		self.login = login;

		function login() {
			loginProv.login(self.username, self.password).then(
				function(data){
					$rootScope.$broadcast('login::successful', data);
					$location.path('account');
				}, function(error){
					self.loginError = error;
				});
		}
	}
})();
