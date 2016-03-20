(function() {
    angular
        .module('presentation.settings')
        .factory('MenuItemService', menuItemService);

    function menuItemService() {

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

        var getAvailableMenuItems = function() {
            return availableMenuItems;
        };

        var activeMenuItems = [];

        activeMenuItems.push(availableMenuItems[0]);
        activeMenuItems.push(availableMenuItems[1]);

        var getActiveMenuItems = function() {
            return activeMenuItems;
        };

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