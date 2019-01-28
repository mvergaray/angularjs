"use strict";

angular.module('psFramework').directive("psFramework", function () {
  return {
    scope: {
      title:'@',
      subtitle:'@'
    },
    transclude: true,
    controller: 'psFrameworkController',
    templateUrl: 'ext-modules/psFramework/psFrameworkTemplate.html',
  }
});