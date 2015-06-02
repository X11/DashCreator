var dashApp = angular.module('dashApp', [
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'dashControllers',
    'dashDirectives',
    'dashFactories'
]);

dashApp.config(['$routeProvider',
        function($routeProvider){
            $routeProvider.
                when('/', {
                    title: "Dash Creator",
                    templateUrl: 'partials/login.html',
                }).
                when('/creator', {
                    title: "Creator",
                    templateUrl: 'partials/creator.html',
                }).
                when('/admin', {
                    title: "Management",
                    templateUrl: 'partials/admin.html',
                }).
                otherwise({
                    redirectTo: '/',
                });
        }

]).run(['$rootScope', '$route', '$location', '$cookies', '$http',
    function($r, $route, $location, $cookies, $http){
        
        // Title 
        $r.title = "";
        $r.$on('$routeChangeSuccess', function(cur, old){
            if (old !== cur){
                $r.title = $route.current.title;
            }
        });

        // Add Authorization header
        $r.globals = ($cookies.globals) ? JSON.parse($cookies.globals) : {};
        if ($r.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $r.globals.currentUser.authdata; // jshint ignore:line
        }
 
        // Check if user is allowed to access the page
        $r.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/']) === -1;
            var loggedIn = $r.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/');
            }
            if ($location.path() == "/admin" && $r.globals.currentUser.moderator != '1'){
                $location.path('/');
            }
        });

    }
]);
