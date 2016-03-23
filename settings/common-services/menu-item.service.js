(function() {
    angular
        .module('presentation.settings')
        .factory('MenuItemService', menuItemService);

    function menuItemService() {

        var getAvailableMenuItems = function() {
            return availableMenuItems;
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

        var getActiveMenuItems = function() {
            return activeMenuItems;
        };

        var activeMenuItems = [];

        activeMenuItems.push(availableMenuItems[0]);
        activeMenuItems.push(availableMenuItems[1]);

        var setActiveMenuItems = function(items) {
            activeMenuItems = items;
        };

        var MenuItemService = {
            getActiveMenuItems: getActiveMenuItems,
            getAvailableMenuItems: getAvailableMenuItems,
            setActiveMenuItems: setActiveMenuItems
        };

        return MenuItemService;
    }
})();