angular.module('dashControllers').controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$location', 'AuthenticationService'];

function LoginCtrl($scope, $location, AuthenticationService){
    $scope.submit= function(){
        $scope.loading = true;
        AuthenticationService.Login(user.username, user.password, function(response){
            if (response.success){
                AuthenticationService.SetCredentials(user.username, user.password);
            } else {
                // error
                $scope.loading = false;
            }
        });
    };
}
