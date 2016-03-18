(function(angular) {
    'use strict';

    angular.module('presentation.navbar.menu')
        .directive('navbarMenu', navbarMenuDirective);

    var controller = ['MenuItemService', function(MenuItemService) {
        this.MenuItemService = MenuItemService;
    }];

    function navbarMenuDirective() {
        return {
            restrict: 'E',
            controller: controller,
            controllerAs: 'NavbarMenuController',
            templateUrl: 'navbar/navbar-menu/navbar-menu.html'
        }
    }

})(window.angular);