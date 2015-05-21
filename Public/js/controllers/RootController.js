angular.module('dashControllers').controller('RootCtrl', RootCtrl);

RootCtrl.$inject = ['$scope', '$rootScope', '$location', 'AuthenticationService'];

function RootCtrl($scope, $r, $location, AuthenticationService){
    
    $r.$watch('globals', function(){
        $scope.loggedIn = ($r.globals.currentUser) ? true : false;
    });

    $scope.title = "Dash Creator";
    $scope.description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    $scope.onViewLoad = function(){
        $.material.init();
    };

    $scope.logout = function(){
        AuthenticationService.ClearCredentials();
        $location.path('/');
    };
}
