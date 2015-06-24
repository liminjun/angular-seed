
    angular.module('app.nav').factory('navService', ['$http', 'AppConfig', function ($http, AppConfig) {

        return {
            getNav: function () {
                return $http.get('api.test/nav.json').then(function (response) {
                    return response.data;
                });
                // return $http.get(config.serverBaseUrl+'getModule').then(function(response){
                // 	return response.data.data;
                // });
            }
        };
    }]);
