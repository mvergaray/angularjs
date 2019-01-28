"use strict";

angular.module('app').directive('employee', ['dataService', function(dataService) {
  return {
    templateUrl: 'app/widgets/employee/employeeTemplate.html',
    link: function (scope, el, attrs) {
      dataService.getEmployee(scope.item.widgetSettings.id).then(function (data) {
        scope.selectedEmployee = data;
      });
    }
  };
}]);