(function() {
    'use strict';

    angular
        .module('presentation.navbar')
        .directive('navbar', navbarDirective);

    navbarDirective.$inject = [ '$rootScope' ];

    function navbarDirective($rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'navbar/navbar.html',
            link: function(scope) {
                scope.currentUser = undefined;

                $rootScope.$on('login::successful', function(event, userData) {
                    scope.currentUser = userData;
                });
            }
        };
    }
})();