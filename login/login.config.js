/**
 * Created by tciogmarean on 18/03/16.
 */
(function(){
    'use strict';

    angular
        .module('presentation.login')
        .config(loginProvConfig);

    loginProvConfig.$inject = ['loginProvProvider'];

    function loginProvConfig(loginProvProvider) {
        loginProvProvider.setLoginUrl('login/users.json');
    }
})();