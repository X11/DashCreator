angular.module('dashControllers').controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$scope', '$http'];

function RegisterCtrl($scope, $http){
    $scope.submit = function(form) {
        $scope.submitted = true;
    };
}
