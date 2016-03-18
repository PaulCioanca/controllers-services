(function() {
    'use strict';

    angular
        .module('presentation.settings.editMenuItems')
        .controller('EditMenuItemsCtrl', editMenuItemsCtrl);

    editMenuItemsCtrl.$inject = ['MenuItemService'];

    function editMenuItemsCtrl(MenuItemService) {
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
        }

        function init() {
            self.MenuItemService.getActiveMenuItems().forEach(function(item) {
                self.activeMenuItems[item.path] = true;
            });
        }

    }

})();