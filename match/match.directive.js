/**
 * Created by tciogmarean on 14/03/16.
 */
(function(){
    'use strict';

    angular
        .module('presentation.match')
        .directive('match', match);

    function match() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: linkFunction
        };

        function linkFunction(scope, element, attrs, modelCtrl) {
            modelCtrl.$validators.match = function (modelValue, viewValue) {
                if (!attrs.match) {
                    return true;
                }
                return attrs.match === viewValue;
            };

            attrs.$observe('match', function() {
                modelCtrl.$validate();
            });
        }
    }

})();