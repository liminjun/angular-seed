// checkbox,radio button 美化
angular.module('app.directives')
    .directive('rcBeautifier', function () {
        return {
            link: function (scope, element, attrs) {
                if (!attrs.id) {
                    attrs.id = 'rc-beautifier-' + new Date().getTime() + '-' + Math.floor(Math.random() * 100);
                    element.attr('id', attrs.id);
                }

                $(element).addClass('rc-beautifier').after('<label for="' + attrs.id + '"></label>');
            }
        };
    });