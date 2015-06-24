
angular.module('app.directives').directive('match', [function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {

            ctrl.$validators.match = function (modelValue, viewValue) {

                return modelValue == getMatchValue();
            };

            scope.$watch(getMatchValue, function () {
                ctrl.$$parseAndValidate();
            });

            function getMatchValue() {
                return scope.$eval(attrs.match);
            }

        }
    };
}]);

