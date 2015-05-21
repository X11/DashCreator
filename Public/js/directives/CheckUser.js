angular.module('dashDirectives').directive('CheckUser', CheckUser);

CheckUser.$inject = ['$rootScop', '$location', 'UserService'];

function CheckUser($r, $location, UserService){
    return {
        link: function(scope, elem, attrs, ctrl){
            $r.$on('$routeCahngeStart', function(e, curr, prev){

            });
        }
    };
}
