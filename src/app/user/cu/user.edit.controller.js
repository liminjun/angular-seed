
angular.module('app.user.cu').controller('UserEditController', ['$scope', '$stateParams', 'userService', function ($scope, $stateParams, userService) {
    var vm = this;
    vm.isSubmitting = false;
    vm.userId = Number($stateParams.userId);

    vm.username = null;
    vm.fullName = null;
    vm.password = null;
    vm.passwordConfirm = null;




    getUserInfo();

    vm.edit = function () {
        vm.isSubmitting = true;

        userService.edit(vm.userId, vm.fullName, vm.password).success(function (response) {
            vm.isSubmitting = false;
            
            $scope.$state.go('^');
            
        });
    };


    function getUserInfo() {

        userService.getUserInfo(vm.userId).success(function (response) {

                var data = response.data;

                vm.userName = data.userName;
                vm.fullName = data.fullName;



        });
    }
}]);
