(function(angular) {
    'use strict';

    angular
        .module('presentation.settings.editMenuItems')
        .controller('EditMenuItemsCtrl', ['MenuItemService', editMenuItemsController]);

    function editMenuItemsController(MenuItemService) {
        this.MenuItemService = MenuItemService;

        var activeMenuItems = {};
        this.MenuItemService.getActiveMenuItems().forEach(function(item) {
            activeMenuItems[item.path] = true;
        });
        this.activeMenuItems = activeMenuItems;

        this.updateNavMenu = angular.bind(this, function() {
            var activeMenuItems = this.activeMenuItems;
            var newActiveMenuItems = [];

            this.MenuItemService.getAvailableMenuItems().forEach(function(item) {
                if (activeMenuItems[item.path] === true) {
                    newActiveMenuItems.push(item);
                }
            });

            this.MenuItemService.setActiveMenuItems(newActiveMenuItems);
        });
    }
})(window.angular);