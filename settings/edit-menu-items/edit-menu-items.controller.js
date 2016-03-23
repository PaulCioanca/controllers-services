(function() {
    'use strict';

    angular
        .module('presentation.settings.editMenuItems')
        .controller('EditMenuItemsCtrl', EditMenuItemsCtrl);

    EditMenuItemsCtrl.$inject = ['MenuItemService'];

    function EditMenuItemsCtrl(MenuItemService) {
        var self = this;

        self.activeMenuItems = {};
        self.MenuItemService = MenuItemService;
        self.updateNavMenu = updateNavMenu;

        init();

        function updateNavMenu() {
            var activeMenuItems = self.activeMenuItems;
            var newActiveMenuItems = [];

            self.MenuItemService.getAvailableMenuItems().forEach(function(item) {
                if (activeMenuItems[item.path] === true) {
                    newActiveMenuItems.push(item);
                }
            });

            self.MenuItemService.setActiveMenuItems(newActiveMenuItems);
        }

        function init() {
            self.MenuItemService.getActiveMenuItems().forEach(function(item) {
                self.activeMenuItems[item.path] = true;
            });
        }

    }

})();