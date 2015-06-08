(function(){

    'use strict';

    angular
        .module('dashDirectives')
        .directive('ngConfirmClick', ngConfirmClick);

    ngConfirmClick.$inject = [];

    function ngConfirmClick(){
        return {
            priority: -1,
            restrict: 'A',
            link: function(scope, element, attrs){
                var message = attrs.ngConfirmClick || "Are you sure";
                element.bind('click',function (e) {
                    if (!window.confirm(message)){
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        };
    }

})();
