angular.module('dashFactories').factory('UserService', UserService);

UserService.$inject = ['$http'];

function UserService($http){
    var user = {
        GetAll: GetAll,
        GetById: GetById,
        Create: Create,
        Update: Update,
    };
    return user;

    function GetAll() {
        return $http.get('../Api/?rt=users').then(handleSuccess, handleError('Error getting all users'));
    }

    function GetById(id) {
        return $http.get('../Api/?rt=users/' + id).then(handleSuccess, handleError('Error getting user by id'));
    }

    function Create(user) {
        return $http.post('../Api/?rt=users', user).then(handleSuccess, handleError('Error creating user'));
    }

    function Update(user) {
        return $http.put('../Api/?rt=users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
    }

    // private functions

    function handleSuccess(response) {
        return response.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }
}
