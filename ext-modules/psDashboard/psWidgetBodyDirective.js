"use strict";

angular.module('psFramework').directive('psWidgetBody', ['$compile', function($compile) {
  return {
    templateUrl: 'ext-modules/psDashboard/psWidgetBodyTemplate.html',
    link: function (scope, element, attrs) {
      var newEl = angular.element(scope.item.template);
      element.append(newEl);
      $compile(newEl)(scope);
    }
  };
}]);