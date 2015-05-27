angular.module('dashControllers').controller('RootCtrl', RootCtrl);

RootCtrl.$inject = ['$scope', '$rootScope', '$location', '$timeout', 'AuthenticationService'];

function RootCtrl($scope, $r, $location, $timeout, AuthenticationService){
    
    $r.$watch('globals', function(){
        $r.loggedIn = ($r.globals.currentUser) ? true : false;
        if ($r.loggedIn)
            $r.moderator = ($r.globals.currentUser.moderator == "1") ? true : false;
        else
            $r.moderator = false;
    });

    $scope.info= {
        title: "Dash Creator",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        gettingStarted: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };

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
