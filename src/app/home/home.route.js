
angular.module('app.home').config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('app.home', {
        url: '/',
        templateUrl: 'app/home/index.html',
        resolve:{
            loadController:['$ocLazyLoad',function($ocLazyLoad){
                $ocLazyLoad.load('app/home/home.controller.js');
            }]
        },
        controller: 'HomeController'
    });

}]);