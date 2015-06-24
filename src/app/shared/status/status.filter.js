
//{id: 1, text: '启用'}, {id: 2, text: '禁用'}, {id: -1, text: '已删除'}
angular.module('app.filters').filter('status',[function(){
    return function(key){
        var text = '';
        switch(key)
        {
            case 1:
                text = '启用';
                break;
            case 2:
                text = '禁用';
                break;
            case -1:
                text = '已删除';
                break;
            default:
                break;
        }
        return text;
    };
}]);


