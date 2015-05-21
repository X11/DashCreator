angular.module('dashControllers').controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$scope', '$http'];

function RegisterCtrl($scope, $http){
    $scope.user = {};
    $scope.submit = function() {
        $scope.submitted = true;
        if ($scope.RegisterForm.$invalid){
            return;
        }
        $scope.sending = true;
        UserService.Create($scope.user).then(function(response){
            if (response.success){
                //$location.path('/');
            } else {
                // error
                $scope.sending = false;
            }
        });
    };
}
