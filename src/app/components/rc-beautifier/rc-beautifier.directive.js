// checkbox,radio button 美化
angular.module('app.directives')
    .provider('rcBeautifier', function () {
        function Fn() {
            this.sequence = 0;
        }
        Fn.prototype.generateSequence = function () {
            return ++this.sequence;
        };

        this.$get = function () {
            return new Fn();
        };
    })
    .directive('rcBeautifier', ['rcBeautifier', function (rcBeautifier) {
        return {
            link: function (scope, element, attrs) {
                var id = attrs.id;
                if (angular.isUndefined(id)) {
                    id = 'rc-beautifier-' + rcBeautifier.generateSequence();
                    element.attr('id', id);
                }
                $(element).addClass('rc-beautifier').after('<label for="' + id + '"></label>');
            }
        };
    }]);