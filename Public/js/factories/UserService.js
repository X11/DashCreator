angular.module('dashFactories').factory('UserService', UserService);

UserService.$inject = ['$http'];

function UserService($http){
    var user = {
        GetAll: GetAll,
        GetById: GetById,
        GetByUsername: GetByUsername,
        Create: Create,
        Update: Update,
        Delete: Delete,
    };
    return user;

    function GetAll() {
        return $http.get('../Api/?rt=users').then(handleSuccess, handleError('Error getting all users'));
    }

    function GetById(id) {
        return $http.get('../Api/?rt=users/' + id).then(handleSuccess, handleError('Error getting user by id'));
    }

    function GetByUsername(username) {
        return $http.get('../Api/?rt=users/' + username).then(handleSuccess, handleError('Error getting user by username'));
    }

    function Create(user) {
        return $http.post('../Api/?rt=users', user).then(handleSuccess, handleError('Error creating user'));
    }

    function Update(user) {
        return $http.put('../Api/?rt=users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
    }

    function Delete(id) {
        return $http.delete('../Api/?rt=users/' + user.id).then(handleSuccess, handleError('Error deleting user'));
    }

    // private functions

    function handleSuccess(data) {
        return data.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }
}
