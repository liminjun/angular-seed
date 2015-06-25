
angular.module('app.directives')
   .directive('checked', function () {
   	return {
		require: 'ngModel',
   		link: function (scope, element, attrs, ngModel) {
   			
   		}
   	};
   });