(function() {
    'use strict';

    angular.module('presentation.navbar.menu')
        .directive('navbarMenu', navbarMenuDirective);

    navbarMenuDirective.$inject = [ 'MenuItemService' ];

    function navbarMenuDirective(MenuItemService) {
        return {
            restrict: 'E',
            templateUrl: 'navbar/navbar-menu/navbar-menu.html',
            link: function(scope) {
                scope.getActiveMenuItems = getActiveMenuItems;

                function getActiveMenuItems() {
                    return MenuItemService.getActiveMenuItems();
                }
            }
        }
    }
})();