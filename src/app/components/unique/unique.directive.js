
angular.module('app.directives').directive('unique', ['$q', '$http', '$timeout', function ($q, $http, $timeout) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {

            //ctrl.$asyncValidators.unique
            var checkUrl = attrs.uniqueCheckUrl;
            var checkProperty = attrs.uniqueCheckProperty;

            ctrl.$asyncValidators.unique = function (modelValue, viewValue) {

                if (ctrl.$isEmpty(modelValue)) {
                    return $q.when();
                }

                var defer = $q.defer();
                var params = {};
                params[checkProperty] = modelValue;

                //$http({method: 'GET', url: checkUrl, params: params}).success(function (response) {
                //    if (response.success) {
                //        defer.resolve();
                //    } else {
                //        defer.reject();
                //    }
                //}).error(function () {
                //    defer.reject();
                //});

                $timeout(function () {
                    if (['123@a.com', 'abc@a.com'].indexOf(modelValue) > -1) {
                        defer.reject();
                    } else {
                        defer.resolve();
                    }
                }, 1000);

                return defer.promise;
            };

        }
    };
}]);
