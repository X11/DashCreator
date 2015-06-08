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
        description: "The Dash Creator is a simple web-application to create your own dashboard. You can add diffirent widgets to your dashboard to customize your dashboard to your personal preference. All you have to do is log in and start making your dashboard!",
        gettingStarted: "Get started now by clicking the button below, you will get to a creator screen where u can drag the widgets of your choise to your dashboard. You can see the widgets by clicking the '+' button on the right bottom of your screen. When you are done editing your dashboard just simply click on the little screen on the left bottom on the screen. The rest of the options should be really obvious because of the icons. Good luck and Have fun!",
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

    //
    $scope.getWidgetView = function(item){
        return '../Widget/'+item.directory+'/view.php';
    };
}

