angular.module('app.user.cu').controller('UserAddController', ['$scope', 'userService', function($scope, userService){
    var vm = this;
    vm.isSubmitting = false;


    vm.userName = null;
    vm.realName = null;
    vm.password = null;
    vm.passwordConfirm = null;


    vm.add = function(){
        vm.isSubmitting = true;

        userService.add(vm.userName, vm.realName, vm.password).success(function(response){
            vm.isSubmitting = false;
            if(response.success) {
                $scope.$state.go('^');
            } else {

            }
        });
    };
}]);

