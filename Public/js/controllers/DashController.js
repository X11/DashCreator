(function(){
    
    'use strict';

    angular
        .module('dashControllers')
        .controller('DashCtrl', DashCtrl);

    DashCtrl.$inject = ['$scope', '$rootScope', 'WidgetService'];

    function DashCtrl($scope, $r, WidgetService){

        // User widgets
        $scope.userWidgets = [
            [],
            [],
            [],
        ];

        WidgetService.GetUserWidgets($r.globals.currentUser.id).then(function(response){
            if (response.success){
                $scope.userWidgets= response.data;
            } else {
                // Handle error
            }
        });
    }

})();
