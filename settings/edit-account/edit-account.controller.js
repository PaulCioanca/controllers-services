(function() {
    'use strict';

    angular
        .module('presentation.settings.editAccount')
        .controller('EditAccountCtrl', editAccountCtrl);

    editAccountCtrl.$inject = ['$rootScope'];

    function editAccountCtrl($rootScope) {
        var self = this;

        self.user = {};
        self.passwordsMatch = true;
        self.submit = submit;
        self.validatePasswordMatch = validatePasswordMatch;

        function validatePasswordMatch() {
            if (!self.user.password) {
                self.passwordsMatch = true;
            } else {
                self.passwordsMatch = self.user.password === self.user.passwordConfirm;
            }
        }

        function submit() {
            if (self.editAccountForm.$valid && self.passwordsMatch) {
                $rootScope.$broadcast('accountUpdate::successful', angular.copy(self.user));
            }
        }
    }

})();