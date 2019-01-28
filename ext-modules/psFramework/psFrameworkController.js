"use strict";

angular.module('psFramework').controller('psFrameworkController',
[
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.$on('ps-menu-item-selected-event', function (evt, data) {
      $scope.routeString = data.route;
      $location.path(data.route);
    });
  }
])