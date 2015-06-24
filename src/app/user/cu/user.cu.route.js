/* user 新建（create）和编辑（update/edit） */
angular.module('app.user.cu').config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('app.user.add', {
            url: '/add',
            views: {
                '@app': {
                    templateUrl: 'app/user/cu/index.html',
                    controller: 'UserAddController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        files: [
                            'app/user/user.service.js',
                            'app/components/email/email.directive.js',
                            'app/components/match/match.directive.js',
                            'app/components/unique/unique.directive.js',
                            'app/user/cu/user.add.controller.js'
                            ]
                    });
                }]
            }
        }).state('app.user.edit', {
            url: '/edit/:userId',
            views: {
                '@app': {
                    templateUrl: 'app/user/cu/index.html',
                    controller: 'UserEditController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                load: ['$ocLazyLoad', function($ocLazyLoad){

                    return  $ocLazyLoad.load({
                        files:[
                            'app/user/user.service.js',
                            'app/user/cu/user.edit.controller.js',
                            'app/components/match/match.directive.js'
                        ]
                    });
                }]
            }
        });
}]);

