angular.module('dashFactories').factory('WidgetService', WidgetService);

UserService.$inject = ['$http'];

function WidgetService($http){
    var services = {
        GetAll: GetAll,
    };
    return services;

    function GetAll() {
        return $http.get('../Api/?rt=widgets').then(handleSuccess, handleError('Error getting all widgets'));
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
