
angular.module('app.user').config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('app.user', {
        url: '/user',
        templateUrl: 'app/user/index.html',
        resolve:{
            load:['$ocLazyLoad',function($ocLazyLoad){
                return $ocLazyLoad.load([
                    'app/user/user.controller.js',
                    'app/user/user.service.js',
                    'app/components/rc-beautifier/rc-beautifier.directive.js',
                    'app/shared/status/status.filter.js']);
            }]
        }
    });

}]);

