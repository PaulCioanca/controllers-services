(function() {
    'use strict';

    angular
        .module('presentation.settings.editAccount')
        .controller('EditAccountCtrl', editAccountCtrl);

    editAccountCtrl.$inject = ['$rootScope'];

    function editAccountCtrl($rootScope) {
        var vm = this;

        vm.user = {};
        vm.passwordsMatch = true;
        vm.validPhoneNumber = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        vm.submit = submit;
        vm.validatePasswordMatch = validatePasswordMatch;

        function validatePasswordMatch() {
            if (!vm.user.password) {
                vm.passwordsMatch = true;
            } else {
                vm.passwordsMatch = vm.user.password === vm.user.passwordConfirm;
            }
        }

        function submit() {
            if (vm.editAccountForm.$valid && vm.passwordsMatch) {
                $rootScope.$broadcast('accountUpdate::successful', angular.copy(vm.user));
            }
        }
    }

})();