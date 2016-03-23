(function() {
    'use strict';

    angular
        .module('presentation.settings.editAccount')
        .controller('EditAccountCtrl', editAccountCtrl);

    editAccountCtrl.$inject = ['$rootScope'];

    function editAccountCtrl($rootScope) {
        var vm = this;

        vm.user = {};
        vm.validPhoneNumber = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        vm.submit = submit;

        function submit() {
            if (vm.editAccountForm.$valid) {
                $rootScope.$broadcast('accountUpdate::successful', angular.copy(vm.user));
            }
        }
    }

})();