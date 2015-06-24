angular.module('app.user').factory('userService', ['$http', '$q', '$timeout', function ($http, $q, $timeout) {

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
        },
        add: function (userName, fullName, password) {
            var d = $q.defer();

            $timeout(function () {
                d.resolve();
            }, 1000);

            d.promise.success = function (fn) {
                d.promise.then(function (data) {
                    fn(data);
                });
            };

            return d.promise;
        },
        edit: function (userId, userName, fullName, password) {
            var d = $q.defer();
            $timeout(function () {
                d.resolve();
            }, 500);

            d.promise.success = function (fn) {
                d.promise.then(function (data) {
                    fn(data);
                });
            };
            return d.promise;
        }
    };
}]);
