'use strict';

angular
	.module('presentation.login')
	.provider('loginProv', loginProvider);

function loginProvider() {
	this.$get = function($http, $q) {
		return {
			login: angular.bind(this, login, $http, $q)
		};
	};

	this.loginUrl = null;

	function login(http, q, username, password) {
		var deferred = q.defer();

		http.get(this.loginUrl).then(
			function(data) {
				var users = data.data.users;
				var user = checkCredentials(username, password, users);
				if (user) {
					deferred.resolve(user);
				} else {
					deferred.reject('Username - password combination does not exist.');
				}
			}, function(error) {
				deferred.reject(error);
			});
		return deferred.promise;
	}

	function checkCredentials(username, password, users) {
		var length = users.length;
		for (var i=0; i< length; i++) {
			var user = users[i];
			if (user.username === username && user.password === password) {
				delete user.password;
				return user;
			}
		}
		return null;
	}
}