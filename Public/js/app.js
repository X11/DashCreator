var dashApp = angular.module('dashApp', [
    'ngRoute',
    'ngCookies',
    'dashControllers',
    'dashDirectives',
    'dashFactories',
]);

dashApp.config(['$routeProvider',
        function($routeProvider){
            $routeProvider.
                when('/', {
                    templateUrl: 'partials/login.html',
                }).
                when('/creator', {
                    templateUrl: 'partials/creator.html',
                }).
                otherwise({
                    redirectTo: '/',
                });
        }
]).run(['$rootScope', '$location', '$cookies', '$http',
    function($r, $location, $cookies, $http){
        // keep user logged in after page refresh
        $r.globals = $cookies.globals || {};
        if ($r.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $r.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $r.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/']) === -1;
            var loggedIn = $r.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/');
            }
        });

    }
]);
