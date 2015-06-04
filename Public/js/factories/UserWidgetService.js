angular.module('dashFactories').factory('UserWidgetService', UserWidgetService);

UserWidgetService.$inject = ['$http'];

function UserWidgetService($http){
    var services = {
        getRelations: getRelations,
        createRelation: createRelation,
        updateRelation: updateRelation,
        deleteRelation: deleteRelation,
        deleteAllRelations: deleteAllRelations,
    };
    return services;

    function getRelations(userId){
        return $http.get('../Api/?rt=user/'+userId+'/widgets').then(handleSuccess, handleError('Error getting all widgets'));
    }

    function createRelation(userId, widgetId, row) {
        return $http.post('../Api/?rt=user/widget', {userId: userId, widgetId: widgetId, row: row}).then(handleSuccess, handleError('Error getting all widgets'));
    }

    function updateRelation(userId, widgetId, row) {
        return $http.put('../Api/?rt=user/'+userId+'/widget/'+widgetId, {row: row}).then(handleSuccess, handleError('Error getting all widgets'));
    }

    function deleteRelation(userId, widgetId) {
        return $http.delete('../Api/?rt=user/'+userId+'/widget/'+widgetId).then(handleSuccess, handleError('Error getting all widgets'));
    }

    function deleteAllRelations(userId) {
        return $http.delete('../Api/?rt=user/'+userId+'/widgets').then(handleSuccess, handleError('Error getting all widgets'));
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
