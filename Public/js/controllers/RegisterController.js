(function(){

    'use strict';

    angular
        .module('dashControllers')
        .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['$scope', '$http', 'UserService'];

    function RegisterCtrl($scope, $http, UserService){
        $scope.user = {};
        $scope.submit = function() {
            $scope.submitted = true;
            if ($scope.RegisterForm.$invalid){
                return;
            }
            $scope.sending = true;
            UserService.Create($scope.user).then(function(response){
                if (response.success){
                    $scope.sending = false;
                    $scope.created = true;
                } else {
                    $scope.ErrorMessage = response.message || 'Error creating your account';
                    $scope.sending = false;
                }
            });
        };
    }

})();
