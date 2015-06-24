angular.module('app.role').factory('roleService', ['$http', '$q', '$timeout', function ($http, $q, $timeout) {

    return {
        
        getRoleList: function () {
            return $http({
                url: 'api.test/role/list.json',
                method: 'GET'
            });
        },
        add: function (roleName) {
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
        edit: function (roleId, roleName) {
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
