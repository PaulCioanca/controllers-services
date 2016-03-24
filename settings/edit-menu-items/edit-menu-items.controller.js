(function() {
    'use strict';

    angular
        .module('presentation.settings.editMenuItems')
        .controller('EditMenuItemsCtrl', EditMenuItemsCtrl);

    EditMenuItemsCtrl.$inject = ['MenuItemService'];

    function EditMenuItemsCtrl(MenuItemService) {
        var vm = this;

        vm.activeMenuItems = {};
        vm.MenuItemService = MenuItemService;
        vm.updateNavMenu = updateNavMenu;

        init();

        function updateNavMenu() {
            var activeMenuItems = vm.activeMenuItems;
            var newActiveMenuItems = [];

            vm.MenuItemService.getAvailableMenuItems().forEach(function(item) {
                if (activeMenuItems[item.path] === true) {
                    newActiveMenuItems.push(item);
                }
            });

            vm.MenuItemService.setActiveMenuItems(newActiveMenuItems);
        }

        function init() {
            vm.MenuItemService.getActiveMenuItems().forEach(function(item) {
                vm.activeMenuItems[item.path] = true;
            });
        }

    }

})();