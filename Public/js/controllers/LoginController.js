(function(){
    
    'use strict';

    angular
        .module('dashControllers')
        .controller('LoginCtrl', LoginCtrl);

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
                    AuthenticationService.SetCredentials(response.userId, $scope.user.username, $scope.user.password, response.userMod);
                } else {
                    $scope.ErrorMessage = response.message;
                    $scope.loading = false;
                }
            });
        };
    }

})();
