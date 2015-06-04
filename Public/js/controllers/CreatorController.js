angular.module('dashControllers').controller('CreatorCtrl', CreatorCtrl);

CreatorCtrl.$inject = ['$scope', '$rootScope', 'WidgetService', 'UserWidgetService'];

function CreatorCtrl($scope, $r, WidgetService, UserWidgetService){

    $scope.hidePanels = false;
    $scope.dragging = false;
    $scope.widgetbar = {
        show: false,
        dragging: false,
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

    //if (localStorage.getItem('userWidgets'))
    //    $scope.userWidgets = JSON.parse(localStorage.getItem('userWidgets'));

    $scope.saveWidgets = function(){
        localStorage.setItem('userWidgets', JSON.stringify($scope.userWidgets));
    };

    $scope.resetWidgets = function(){
        for (var i = 0, l = $scope.userWidgets.length; i < l; i ++) {
            var row = $scope.userWidgets[i];
            var widgets = row.splice(0, row.length);
            $scope.widgets = $scope.widgets.concat(widgets);
        }
        UserWidgetService.deleteAllRelations($r.globals.currentUser.id).then(function(response){
            console.log(response);
            if (response.success){
                // success
            } else {
                // error
            }
        });
    };

    // Drag and drop handling
    $scope.handleDrop = function(row, item, draggedRow){
        var widget;
        if (draggedRow != "undefined"){
            draggedRow = parseInt(draggedRow);
            widget = $scope.userWidgets[draggedRow].splice(item, 1)[0];
            UserWidgetService.updateRelation($r.globals.currentUser.id, widget.id, row).then(function(response){
                console.log(response);
                if (response.success){
                    // success
                } else {
                    // error
                }
            });
        } else {
            widget = $scope.widgets.splice(item, 1)[0];
            UserWidgetService.createRelation($r.globals.currentUser.id, widget.id, row).then(function(response){
                console.log(response);
                if (response.success){
                    // success
                } else {
                    // error
                }
            });
        }
        $scope.userWidgets[row].push(widget);
        $scope.cancelDrag();
    };

    $scope.handleDrag = function(){
        $scope.widgetbar.dragging = $scope.widgetbar.show;
        $scope.widgetbar.show = false;
        $scope.dragging = true;
    };

    $scope.cancelDrag = function(){
        $scope.dragging = false;
        if ($scope.widgetbar.dragging)
            $scope.widgetbar.show = true;
    };

    $scope.removeWidget = function(row, item){
        if (row != "undefined"){
            row = parseInt(row);
            widget = $scope.userWidgets[row].splice(item, 1)[0];
            $scope.dragging = false;
            $scope.widgets.push(widget);
            $scope.saveWidgets();
            UserWidgetService.deleteRelation($r.globals.currentUser.id, widget.id).then(function(response){
                console.log(response);
                if (response.success){
                    // success
                } else {
                    // error
                }
            });
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
