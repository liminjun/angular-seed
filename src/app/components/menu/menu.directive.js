
angular.module('app.directives').directive('menu', ['$compile', '$location', function ($compile, $location) {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            menu: '='
        },
        template: '<ul><li ng-repeat="item in ::menu" menu-item="::item" ng-show="item.isNav==true"></li></ul>',
        link: function (scope, element, attrs) {
            element.on('click', function () {
                element.find('.dropdown-menu').hide();
            });
        }
    };
}]).directive('menuItem', ['$compile', '$location', '$state', '$filter',
    function ($compile, $location, $state, $filter) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                item: '=menuItem'
            },
            template: '<li ng-class="{dropdown:item.children&&item.children.length>0, active:$state.includes(item.href)}"></li>',
            link: function (scope, element, attrs) {
                scope.$state = $state;
                if (scope.item.children && $filter('filter')(scope.item.children, {isNav: true}).length > 0) {
                    element.append('<a ui-sref="{{::item.href}}">{{::item.title}}<i class="icon-downarrow"></i></a><div menu="::item.children" class="dropdown-menu"></div>');

                    element.on('mouseenter', function () {
                        element.find('> .dropdown-menu').show();
                    }).on('mouseleave', function () {
                        element.find('> .dropdown-menu').hide();
                    });

                } else {
                    element.append('<a ui-sref="{{::item.href}}">{{::item.title}}</a>');
                }

                $compile(element.contents())(scope);

            }
        };
    }]);

