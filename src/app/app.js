//
//modules,config,constant,run
//
angular.module('app.filters', []);
angular.module('app.services', []);
angular.module('app.directives', []);

angular.module('app.nav', []);

angular.module('app.home', []);

angular.module('app.user', ['app.user.cu']);
angular.module('app.user.cu', []);

angular.module('app.role', []);

/* app */
angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'ngMessages',
    'ui.router',
    'ui.bootstrap',
    'smart-table',
    'oc.lazyLoad',
    'app.directives',
    'app.services',
    'app.filters',
    'app.nav',
    'app.home',
    'app.user',
    'app.role'])
    .config(['$httpProvider', function ($httpProvider) {

        //$httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push(['$q', '$location', '$rootScope', function ($q, $location, $rootScope) {

            var pending = 0;
            $rootScope.$watch(
                function () {
                    return pending > 0;
                },
                function (loading) {
                    $rootScope.loading = loading;
                }
            );
            return {
                request: function (config) {
                    pending++;
                    return config;
                },
                requestError: function (config) {
                    pending++;
                },
                response: function (response) {
                    pending--;
                    return response;
                },
                responseError: function (response) {
                    pending--;
                    var status = response.status;
                    if (status == 401) {
                        $location.path('/login');
                    }
                    return $q.reject(response);
                }
            };
        }]);
    }])
    .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {

    }])
    .config(['stConfig', function (stConfig) {
        stConfig.pagination.itemsByPage = 10;
        //stConfig.pagination.displayedPages = 5;
    }])
    .constant('Status', {
        Enabled: 1,
        Disabled: 2,
        Deleted: -1
    })
    .constant('AppConfig', {

        serverBaseUrl: 'http://localhost:63342/'

    })

    .run(['$rootScope', '$state', '$stateParams', 'AppConfig', function ($rootScope, $state, $stateParams, AppConfig) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.AppConfig = AppConfig;

        $rootScope.theme = 'default';
    }]);
