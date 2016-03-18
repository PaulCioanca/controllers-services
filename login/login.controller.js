'use strict';

angular
	.module('presentation.login')
	.controller('LoginCtrl', loginController);

function loginController($rootScope, $location, loginService) {
	var self = this;

	self.username;
	self.password;
	self.login = login;

	function login() {
		loginService.login(self.username, self.password).then(
			function(data){
				$rootScope.$broadcast('login::successful', data);
				$location.path('account');
			}, function(error){
				console.log(error);
			});
	}
}