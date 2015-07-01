
angular.module('app.directives').directive('statusSelect',['Status',function(Status){
    return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {},
        templateUrl: 'app/shared/status/status-select/index.html',
        link: function (scope, element, attrs, ngModel) {
            scope.placeholder = attrs.placeholder;

            scope.$ = { selected: null };
            scope.statusList = [];
            getStatusList();


            scope.onSelect = function () {
                ngModel.$setViewValue(scope.$.selected);
            };
            scope.onRemove = function () {
                ngModel.$setViewValue(scope.$.selected);
            };

            //ngModel改变时ui-select也随变化
            ngModel.$render = function () {
                scope.$.selected = ngModel.$viewValue;
            };

            function getStatusList() {
                var list = [];
                angular.forEach(Status, function (item) {
                    list.push({ value: item.value, text: item.displayName });
                });
                scope.statusList = list;
                scope.$.selected = ngModel.$viewValue;
                return list;
            }
        }
    };
}]);
