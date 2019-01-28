"use strict";

angular.module('app').directive('temperature', ['dataService', function(dataService) {
  return {
    templateUrl: 'app/widgets/temperature/temperatureTemplate.html',
    link: function (scope, el, attrs) {
      dataService.getLocation(scope.item.widgetSettings.id).then(function (data) {
        scope.selectedLocation = data;
      });
    }
  };
}]);