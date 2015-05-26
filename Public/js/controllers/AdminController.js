angular.module('dashControllers').controller('AdminCtrl', AdminCtrl);

AdminCtrl.$inject = ['$scope', 'WidgetService'];

function AdminCtrl($scope, WidgetService){
    $scope.widgets = [];
    WidgetService.GetAll().then(function(response){
        if (response.success){
            $scope.widgets = response.data;
        } else {
            // Handle error
        }
    });
}
