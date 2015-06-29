angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
        abstract: true,
        templateUrl: 'app/index.html',
        resolve: {
            //$navService:['$ocLazyLoad', function($ocLazyLoad){
            //    return $ocLazyLoad.load('app/nav/nav.service.js');
            //
            //}],
            //$userService: ['$ocLazyLoad', function($ocLazyLoad){
            //    return $ocLazyLoad.load('app/user/user.service.js');
            //}],
            //nav: ['$navService', 'navService', function($navService, navService){
            //    return navService.getNav();
            //}],
            //currentUser:['$userService', 'userService', function($userService, userService){
            //    return userService.getCurrentUser();
            //}]
            loadCss:['$ocLazyLoad', 'AppConfig', function ($ocLazyLoad, AppConfig) {                
                return $ocLazyLoad.load([
                    'assets/theme/' + AppConfig.theme + '/css/bootstrap.min.css',
                    'assets/theme/' + AppConfig.theme + '/css/style.min.css'
                ]);
            }],
            nav: ['$ocLazyLoad', '$injector', function($ocLazyLoad, $injector){
                return $ocLazyLoad.load('app/nav/nav.service.js').then(function(){
                   return $injector.get('navService').getNav();
                });

            }],
            currentUser:['$ocLazyLoad', '$injector', function($ocLazyLoad, $injector){
                return $ocLazyLoad.load('app/user/user.service.js').then(function(){
                    return $injector.get('userService').getCurrentUser();
                });
            }],
            load: ['$ocLazyLoad', 'AppConfig', function ($ocLazyLoad, AppConfig) {                
                return $ocLazyLoad.load([
                    'app/components/menu/menu.directive.js',
                    'app/components/rc-beautifier/rc-beautifier.directive.js'
                ]);
            }]
        },
        controller: ['$rootScope', '$scope', '$state', 'nav', 'currentUser', function ($rootScope, $scope, $state, nav, currentUser) {

            $scope.nav = nav;

            $rootScope.currentUser = currentUser;
            

            var navs = {};
            (function flatten(a, dest) {
                var i = 0,
                    j = a.length;
                for (; i < j; i++) {
                    dest[a[i].alias || a[i].href] = a[i];
                    if (a[i].children && a[i].children.length > 0) {
                        arguments.callee(a[i].children, dest);
                    }
                }
            })(nav, navs);


            $scope.$on('$stateChangeSuccess', function () {
                $rootScope.breadcrumb = [];
                var current = $state.$current.name,
                    states = current.split('.'),
                    i = 2,
                    j = states.length;
                for (; i <= j; i++) {
                    var stateItem = states.slice(0, i).join('.');
                    if (navs[stateItem]) {

                        $rootScope.title = $scope.title = navs[stateItem].title;
                        $rootScope.breadcrumb.push(navs[stateItem]);
                    }
                }
                if (current.indexOf('app.home') !== 0) {
                    $rootScope.breadcrumb.unshift(navs['app.home']);
                }
            });
        }]
    });
}]);