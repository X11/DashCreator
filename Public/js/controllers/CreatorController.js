angular.module('dashControllers').controller('CreatorCtrl', CreatorCtrl);

CreatorCtrl.$inject = ['$scope', 'WidgetService'];

function CreatorCtrl($scope, WidgetService){

    $scope.widgetbar = {
        showing: false,
    };

    // Handlers
    $scope.showWidgetBar = function(){
        $scope.widgetbar.showing = !$scope.widgetbar.showing;
    };

    // API Call
    $scope.widgets = [];
    WidgetService.GetAll().then(function(response){
        if (response.success){
            $scope.widgets = response.data;
        } else {
            // Handle error
        }
    });
}
