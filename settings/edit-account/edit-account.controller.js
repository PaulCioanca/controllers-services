(function() {
    'use strict';

    angular
        .module('presentation.settings.editAccount')
        .controller('EditAccountCtrl', editAccountCtrl);

    editAccountCtrl.$inject = ['$rootScope'];

    function editAccountCtrl($rootScope) {
        var self = this;

        self.user = {};
        self.submit = submit;

        function submit() {
            $rootScope.$broadcast('accountUpdate::successful', angular.copy(self.user));
        }
    }

})();