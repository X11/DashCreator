angular.module('dashControllers').controller('CreatorCtrl', CreatorCtrl);

CreatorCtrl.$inject = ['$scope', 'WidgetService'];

function CreatorCtrl($scope, WidgetService){

    $scope.widgetbar = {
        show: false,
    };

    // Handlers
    $scope.showWidgetBar = function(){
        $scope.widgetbar.show = !$scope.widgetbar.show;
    };

    //
    $scope.userWidgets = [
        [],
        [],
        [],
        [],
        [],
    ];

    $scope.handleDrop = function(arg1, arg2){
        console.log('Handling drop something', arg1, arg2);
    };

    // API Call
    $scope.widgets = [];
    WidgetService.GetEnabled().then(function(response){
        if (response.success){
            $scope.widgets = response.data;
        } else {
            // Handle error
        }
    });
}
