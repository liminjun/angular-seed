
angular.module('app.role').controller('RoleModalController', ['$scope', '$modalInstance', '$ocLazyLoad', '$injector', 'action', 'role', function ($scope, $modalInstance, $ocLazyLoad, $injector, action, role) {
    $scope.action = action;
    $scope.roleName = role.roleName;
    $scope.isSubmitting = false;

    $scope.add = function () {
        $scope.isSubmitting = true;
        $ocLazyLoad.load('app/role/role.service.js').then(function () {
            var roleService = $injector.get('roleService');
            roleService.add($scope.roleName).success(function (response) {
                $scope.isSubmitting = false;
                
                $modalInstance.close();
                
            });
        });
    };

    $scope.edit = function () {
        $scope.isSubmitting = true;
        $ocLazyLoad.load('app/role/role.service.js').then(function () {
            var roleService = $injector.get('roleService');
            roleService.edit(role.roleId, $scope.roleName).success(function (response) {
                $scope.isSubmitting = false;

                $modalInstance.close();

            });
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
}]);
