angular.module('app.user').factory('userService', ['$http', function ($http) {

    return {
        getCurrentUser: function () {
            return $http.get('api.test/user.json').then(function (response) {
                return response.data;
            });
        },
        getUserList: function () {
            return $http({
                url: 'api.test/user/list.json',
                method: 'GET'
            });
        },
        getUserInfo: function(userId){
            return $http({
                url: 'api.test/user/info.json',
                method: 'GET'
            });
        }
    };
}]);
