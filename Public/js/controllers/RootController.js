angular.module('dashControllers').controller('RootCtrl', RootCtrl);

RootCtrl.$inject = ['$scope', '$rootScope', '$location', '$timeout', 'AuthenticationService'];

function RootCtrl($scope, $r, $location, $timeout, AuthenticationService){
    
    $r.$watch('globals', function(){
        $scope.loggedIn = ($r.globals.currentUser) ? true : false;
        if ($scope.loggedIn)
            $scope.moderator = ($r.globals.currentUser.moderator == "1") ? true : false;
        else
            $scope.moderator = false;
    });

    $scope.title = "Dash Creator";
    $scope.description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    $scope.$on('$viewContentLoaded', function(){
        $timeout(function(){
            $.material.init();
        }, 0);
    });

    $scope.logout = function(){
        AuthenticationService.ClearCredentials();
        $location.path('/');
    };
}
