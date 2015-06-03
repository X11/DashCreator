angular.module('dashControllers').controller('CreatorCtrl', CreatorCtrl);

CreatorCtrl.$inject = ['$scope', 'WidgetService'];

function CreatorCtrl($scope, WidgetService){

    $scope.hidePanels = false;
    $scope.dragging = false;
    $scope.widgetbar = {
        show: false,
    };

    // Clicks
    $scope.togglePanels = function(bool){
        $scope.hidePanels = !$scope.hidePanels;
    };

    $scope.showWidgetBar = function(){
        $scope.widgetbar.show = !$scope.widgetbar.show;
    };

    // User widgets
    $scope.userWidgets = [
        [],
        [],
        [],
        //[],
        //[],
    ];

    // Drag and drop handling
    $scope.handleDrop = function(row, item, draggedRow){
        var widget = $scope.widgets[item];
        if (draggedRow != "undefined"){
            draggedRow = parseInt(draggedRow);
            widget = $scope.userWidgets[draggedRow].splice(item, 1)[0];
        }
        $scope.userWidgets[row].push(widget);
        $scope.dragging = false;
    };

    $scope.handleDrag = function(){
        $scope.widgetbar.show = false;
        $scope.dragging = true;
    };

    $scope.cancelDrag = function(){
        $scope.dragging = false;
    };

    $scope.removeWidget = function(row, item){
        if (row != "undefined"){
            row = parseInt(row);
            $scope.userWidgets[row].splice(item, 1);
            $scope.dragging = false;
        }
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
