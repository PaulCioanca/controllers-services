(function() {
    angular
        .module('presentation.settings')
        .factory('MenuItemService', menuItemService);

    function menuItemService() {

        var MenuItemService = {
            getActiveMenuItems: getActiveMenuItems,
            getAvailableMenuItems: getAvailableMenuItems,
            setActiveMenuItems: setActiveMenuItems
        };

        var availableMenuItems = [
            {
                path: 'account',
                name: 'Account dashboard'
            },
            {
                path: 'settings.editAccount',
                name: 'Settings'
            },
            {
                path: 'settings.editMenuItems',
                name: 'Edit menu items'
            }
        ];
        var activeMenuItems = [];

        // default items to be available at login
        activeMenuItems.push(availableMenuItems[0]);
        activeMenuItems.push(availableMenuItems[1]);

        return MenuItemService;

        function getAvailableMenuItems() {
            return availableMenuItems;
        }

        function getActiveMenuItems() {
            return activeMenuItems;
        }

        function setActiveMenuItems(items) {
            activeMenuItems = items;
        }

    }
})();