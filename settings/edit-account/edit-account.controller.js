(function() {
    'use strict';

    angular
        .module('presentation.settings.editAccount')
        .controller('EditAccountCtrl', EditAccountCtrl);

    EditAccountCtrl.$inject = ['$rootScope'];

    function EditAccountCtrl($rootScope) {
        var vm = this;

        vm.user = {};
        vm.submit = submit;

        function submit() {
            if (vm.editAccountForm.$valid) {
                $rootScope.$broadcast('accountUpdate::successful', angular.copy(vm.user));
            }
        }
    }

})();