angular.module('dashFactories').factory('WidgetService', WidgetService);

UserService.$inject = ['$http'];

function WidgetService($http){
    var services = {
        GetAll: GetAll,
        GetEnabled: GetEnabled,
        ScanAndInstall: ScanAndInstall,
        enable: enable,
    };
    return services;

    function GetAll() {
        return $http.get('../Api/?rt=admin/widgets').then(handleSuccess, handleError('Error getting all widgets'));
    }

    function GetEnabled() {
        return $http.get('../Api/?rt=widgets').then(handleSuccess, handleError('Error getting all widgets'));
    }

    function ScanAndInstall() {
        return $http.get('../Api/?rt=install/widgets').then(handleSuccess, handleError('Error getting all widgets'));
    }

    function enable(id, val) {
        return $http.put('../Api/?rt=widgets/'+id, {disable: val}).then(handleSuccess, handleError('Error getting all widgets'));
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
