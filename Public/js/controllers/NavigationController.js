angular.module('dashControllers').controller('NavigationCtrl', NavigationCtrl);

NavigationCtrl.$inject = ['$scope', '$rootScope', '$location'];

function NavigationCtrl($scope, $r, $location){

    $scope.links = [
        {
            name: 'Home',
            route: '/',
        },
        {
            name: 'Creator',
            route: '/creator',
            permission: 'loggedIn',
        },
        {
            name: 'Management',
            route: '/admin',
            permission: 'moderator',
        }
    ];

    $scope.gotAccess = function(permission){
        if ($scope[permission]) return true;
        return false;
    };

    $scope.isActive = function(route){
        if (route == $location.path()) return true;
        return false;
    };
}
