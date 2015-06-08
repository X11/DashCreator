(function(){

    'use strict';

    angular
        .module('dashControllers')
        .controller('CreatorCtrl', CreatorCtrl);

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

        $scope.resetWidgets = function(){
            for (var i = 0, l = $scope.userWidgets.length; i < l; i ++) {
                var row = $scope.userWidgets[i];
                var widgets = row.splice(0, row.length);
                $scope.widgets = $scope.widgets.concat(widgets);
            }
            UserWidgetService.deleteAllRelations($r.globals.currentUser.id).then(function(response){
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
                    //console.log(response);
                    if (response.success){
                        // success
                    } else {
                        // error
                    }
                });
            } else {
                widget = $scope.widgets.splice(item, 1)[0];
                UserWidgetService.createRelation($r.globals.currentUser.id, widget.id, row).then(function(response){
                    //console.log(response);
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
                UserWidgetService.deleteRelation($r.globals.currentUser.id, widget.id).then(function(response){
                    //console.log(response);
                    if (response.success){
                        // success
                    } else {
                        // error
                    }
                });
            }
        };

        // API Call
        $scope.widgets = [];
        var relations = false;
        var parsed = false;

        WidgetService.GetEnabled().then(function(response){
            if (response.success){
                $scope.widgets = response.data;
                parseRelations();
            } else {
                // Handle error
            }
        });
        UserWidgetService.getRelations($r.globals.currentUser.id).then(function(response){
            if (response.success){
                var i,v,l;
                relations = {};
                for (i = 0, l = response.relations.length; i < l; i ++) {
                    v = response.relations[i];
                    relations[v.widget_id] = v.position;
                }
                parseRelations();
            } else {
                // error
            }
        });

        function parseRelations(){
            if ($scope.widgets.length > 0 && relations !== false){
                for (var i = 0; i < $scope.widgets.length; i ++) {
                    var v = $scope.widgets[i];
                    if (typeof(relations[v.id]) != "undefined"){
                        var widget = $scope.widgets.splice(i, 1)[0];
                        $scope.userWidgets[relations[v.id]].push(widget);
                        i--;
                    }
                }
                relations = false;
            }
        }
    }

})();
