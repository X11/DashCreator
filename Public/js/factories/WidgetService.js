(function(){

    'use strict';

    angular
        .module('dashFactories')
        .factory('WidgetService', WidgetService);

    WidgetService.$inject = ['$http'];

    function WidgetService($http){
        var services = {
            GetAll: GetAll,
            GetUserWidgets: GetUserWidgets,
            GetEnabled: GetEnabled,
            ScanAndInstall: ScanAndInstall,
            enable: enable,
            deleteWidget: deleteWidget,
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

        function deleteWidget(id) {
            return $http.delete('../Api/?rt=widgets/'+id).then(handleSuccess, handleError('Error getting all widgets'));
        }

        function GetUserWidgets(id){
            return $http.get('../Api/?rt=user/'+id+'/widgets').then(handleSuccess, handleError('Error getting all widgets'));
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

})();
