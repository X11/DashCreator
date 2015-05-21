angular.module('dashFactories').factory('UserService', UserService);

UserService.$inject = [];

function UserService(){
    var user = {
        isLogged: false,
        username: false,
    };
    return user;
}
