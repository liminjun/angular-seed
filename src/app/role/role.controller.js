angular.module('app.role').controller('RoleController', ['$scope', '$modal', 'roleService', function ($scope, $modal, roleService) {
    $scope.roleDataTable = [];
    $scope.getRoleList = getRoleList;
    $scope.totalCount = 0;

    $scope.isEmpty = false;

    $scope.openRoleModal = function (action, role) {
        console.log(action, role);
        var modalInstance = $modal.open({
            templateUrl: 'app/role/role-modal/index.html',
            controller: 'RoleModalController',
            resolve: {
                action: function () {
                    return action;
                },
                role: function () {
                    return role;
                },
                load: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'app/role/role-modal/role-modal.controller.js'
                    ]);
                }]
            }
        });

        modalInstance.result.then(function (data) {
            
        });
    };

    

    function getRoleList(tableState) {
        var searchObject = $scope.searchObject;

        roleService.getRoleList().success(function (response) {
            

            $scope.isEmpty = response.data.itemList.length === 0;
            tableState.pagination.numberOfPages = response.data.pageCount;
            $scope.roleDataTable = response.data.itemList;
            $scope.totalCount = response.data.totalCount;


        });
    }
}]);


