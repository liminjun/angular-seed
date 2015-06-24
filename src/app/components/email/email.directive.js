
angular.module('app.directives').directive('email', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {

            ctrl.$validators.email = function (modelValue, viewValue) {
                return /^([a-z0-9A-Z]+[_-|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/.test(modelValue);
            };

        }
    };
}]);
