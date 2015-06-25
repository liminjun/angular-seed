angular.module('app.user').controller('UserController', ['$scope', 'userService', function ($scope, userService) {
    var vm = this;
    vm.userDataTable = [];
    vm.getUserList = getUserList;
    vm.totalCount = 0;

    vm.isEmpty = false;
    
    vm.toggleAll = function () {
        var checked = vm.isAllSelected;
        angular.forEach(vm.userDataTable, function (item) {
            item.selected = checked;
        });
    };

    vm.toggle = function () {
        var isAllSelected = true;
        angular.forEach(vm.userDataTable, function (item) {
            if (!item.selected) {
                isAllSelected = false;
            }
        });
        vm.isAllSelected = isAllSelected;
    };


    function getUserList(tableState){
        

        userService.getUserList().success(function (response) {


            vm.isEmpty = response.data.itemList.length === 0;
            tableState.pagination.numberOfPages = response.data.pageCount;
            vm.userDataTable = response.data.itemList;
            vm.totalCount = response.data.totalCount;


        });
    }
}]);


