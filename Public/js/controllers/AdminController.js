angular.module('dashControllers').controller('AdminCtrl', AdminCtrl);

AdminCtrl.$inject = ['$scope', 'WidgetService'];

function AdminCtrl($scope, WidgetService){

    $scope.installWidgets = {
        disabled: false,
        run: function(){
            $scope.installWidgets.disabled = true;
            WidgetService.ScanAndInstall().then(function(response){
                if (response.success){
                    console.log(response.targets);
                    $scope.loadWidgets();
                } else {
                    // handle error
                }
                $scope.installWidgets.disabled = false;
            });
        },
    };

    // Widgets handling
    $scope.widgets = [];

    $scope.loadWidgets = function(){
        WidgetService.GetAll().then(function(response){
            if (response.success){
                $scope.widgets = response.data;
            } else {
                // Handle error
            }
        });
    };

    // init
    $scope.loadWidgets();
}
