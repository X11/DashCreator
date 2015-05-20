var dashApp = angular.module('dashApp', [
    'ngRoute',
    'dashControllers',
]);

dashApp.config(['$routeProvider',
        function($routeProvider){
            $routeProvider.
                when('/', {
                    templateUrl: 'partials/login.html',
                }).
                otherwise({
                    redirectTo: '/',
                });
        }
]);
