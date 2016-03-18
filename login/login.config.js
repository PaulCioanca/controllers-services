/**
 * Created by tciogmarean on 18/03/16.
 */
(function(){
    'use strict';

    angular
        .module('presentation.login')
        .config(loginProvConfig);

    function loginProvConfig(loginProvProvider) {
        loginProvProvider.setLoginUrl('login/users.json');
    }
})();