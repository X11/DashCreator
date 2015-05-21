var dashApp = angular.module('dashApp', [
    'ngRoute',
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
]);
