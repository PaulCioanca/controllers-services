(function(angular) {
    angular.module('presentation.settings')
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

        var activeMenuItems = [];
        activeMenuItems.push(availableMenuItems[0]);
        activeMenuItems.push(availableMenuItems[1]);

        var getAvailableMenuItems = function() {
            return availableMenuItems;
        };

        var getActiveMenuItems = function() {
            return activeMenuItems;
        };

        var setActiveMenuItems = function(items) {
            activeMenuItems = items;
        };

        return {
            getActiveMenuItems: getActiveMenuItems,
            getAvailableMenuItems: getAvailableMenuItems,
            setActiveMenuItems: setActiveMenuItems
        };
    }
})(window.angular);