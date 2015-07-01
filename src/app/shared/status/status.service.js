angular.module('app.services').factory('statusService',['AppConfig', '$http',function(AppConfig, $http){
    return {
        get: function () {
            return $http({
                url: 'api.test/status.enum.json',
                method: 'GET'
            }).then(function (response) {

                return response.data;
            });
            //return $http({
            //    url: AppConfig.serverBaseUrl + 'status',
            //    method: 'GET'
            //});
        }
    };
}]);
