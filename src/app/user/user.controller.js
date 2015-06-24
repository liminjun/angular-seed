angular.module('app.user').controller('UserController', ['$scope', 'userService', function ($scope, userService) {
    $scope.userDataTable = [];
    $scope.getUserList = getUserList;
    $scope.totalCount = 0;

    $scope.isEmpty = false;
    




    function getUserList(tableState){
        var searchObject = $scope.searchObject;

        userService.getUserList().success(function(response){


                    $scope.isEmpty = response.data.itemList.length === 0;
                    tableState.pagination.numberOfPages = response.data.pageCount;
                    $scope.userDataTable = response.data.itemList;
                    $scope.totalCount = response.data.totalCount;


            });
    }
}]);


