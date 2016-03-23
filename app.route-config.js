/**
 * Created by tciogmarean on 23/03/16.
 */
(function(){
    'use strict';

    angular
        .module('presentation')
        .config(routeConfig);

    function routeConfig($urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

    }

})();