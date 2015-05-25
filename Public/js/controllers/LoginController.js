angular.module('dashControllers').controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$location', 'AuthenticationService'];

function LoginCtrl($scope, $location, AuthenticationService){
    $scope.user = {};
    $scope.submit= function(){
        $scope.submitted = true;
        if ($scope.LoginForm.$invalid){
            return;
        }
        $scope.loading = true;
        AuthenticationService.Login($scope.user.username, $scope.user.password, function(data){
            var response = data.data;
            if (response.success){
                AuthenticationService.SetCredentials($scope.user.username, $scope.user.password);
                //$location.path('/creator');
            } else {
                $scope.ErrorMessage = response.message;
                $scope.loading = false;
            }
        });
    };
}
