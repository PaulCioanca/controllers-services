'use strict';

angular
	.module('presentation.login')
	.controller('LoginCtrl', loginController);

function loginController($rootScope, $location, loginProv) {
	var self = this;

	self.username;
	self.password;
	self.login = login;

	function login() {
		loginProv.login(self.username, self.password).then(
			function(data){
				$rootScope.$broadcast('login::successful', data);
				$location.path('account');
			}, function(error){
				console.log(error);
			});
	}
}