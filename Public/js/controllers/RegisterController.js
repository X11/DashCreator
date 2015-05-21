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
        $http.post('App/users', {
            params: {

            }
        }).success(function(){

        });
    };
}
