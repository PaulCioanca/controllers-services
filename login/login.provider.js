(function(){
	'use strict';

	angular
		.module('presentation.login')
		.provider('loginProv', loginProv);

	function loginProv() {
		var loginUrl = null;

		this.$get = $get;
		this.setLoginUrl = setLoginUrl;

		function $get($http, $q) {
			return {
				login: login
			};

			function login(username, password) {
				var deferred = $q.defer();

				$http.get(loginUrl).then(
					function(data) {
						var users = data.data.users;
						var user = checkCredentials(username, password, users);
						if (user) {
							deferred.resolve(user);
						} else {
							deferred.reject('Username - password combination does not exist!');
						}
					}, function(error) {
						deferred.reject(error);
					});
				return deferred.promise;
			}
		}

		function setLoginUrl(url) {
			loginUrl = url;
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
})();
