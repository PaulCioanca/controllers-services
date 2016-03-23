/**
 * Created by tciogmarean on 23/03/16.
 */
(function(){
    'use strict';

    angular.module('presentation')
        .config(loginProvConfig);

    loginProvConfig.$inject = ['loginProvProvider'];

    function loginProvConfig(loginProvProvider) {
        loginProvProvider.setLoginUrl('login/users.json');
    }
})();