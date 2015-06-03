angular.module('dashControllers').controller('CreatorCtrl', CreatorCtrl);

CreatorCtrl.$inject = ['$scope', 'WidgetService'];

function CreatorCtrl($scope, WidgetService){

    $scope.hidePanels = false;
    $scope.dragging = false;
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

    $scope.handleDrop = function(row, item, draggedRow){
        var widget = $scope.widgets[item];
        if (draggedRow != "undefined"){
            draggedRow = parseInt(draggedRow);
            widget = $scope.userWidgets[draggedRow].splice(item, 1)[0];
        }
        $scope.userWidgets[row].push(widget);
        $scope.widgetbar.dragged = false;
    };

    $scope.handleDrag = function(){
        $scope.widgetbar.show = false;
        $scope.widgetbar.dragged = true;
    };

    //
    $scope.getWidgetView = function(item){
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
