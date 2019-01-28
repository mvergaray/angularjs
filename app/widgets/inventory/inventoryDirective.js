"use strict";

angular.module('app').directive('inventory', ['dataService', function(dataService) {
  return {
    templateUrl: 'app/widgets/inventory/inventoryTemplate.html',
    link: function (scope, el, attrs) {

    }
  };
}]);