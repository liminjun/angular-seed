// checkbox,radio初始化,并与AngularJs结合
angular.module('app.directives')
   .directive('rcx', function () {
   	return {
   		link: function (scope, element, attrs, ngModel) {
   			$(element).after("<label></label>");
   		}
   	};
   });