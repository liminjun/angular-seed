
angular.module('app.role').config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('app.role', {
        url: '/role',
        templateUrl: 'app/role/index.html',
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load(['app/role/role.controller.js', 'app/role/role.service.js', 'app/shared/status/status.filter.js']);
            }]
        }
    });

}]);

