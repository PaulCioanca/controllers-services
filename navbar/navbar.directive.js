(function(angular) {
    'use strict';

    angular
        .module('presentation.navbar')
        .directive('navbar', navbarDirective);

    var controller = ['$rootScope', 'MenuItemService', function($rootScope) {
        this.currentUser = null;

        $rootScope.$on('login::successful', function(event, userData) {
            this.currentUser = userData;
        }.bind(this));
    }];

    function navbarDirective() {
        return {
            restrict: 'E',
            templateUrl: 'navbar/navbar.html',
            controller: controller,
            controllerAs: 'NavbarController'
        };
    }
})(window.angular);