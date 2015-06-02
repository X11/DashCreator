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
        //[],
        //[],
    ];

    $scope.handleNewWidgetDrop = function(row, item){
        $scope.userWidgets[row].push($scope.widgets[item]);
    };

    $scope.test = function(item){
        return '../Widget/'+item.directory+'/view.php';
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
