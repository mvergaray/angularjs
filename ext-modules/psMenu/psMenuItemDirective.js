"use strict";

angular.module('psMenu').directive('psMenuItem', function () {
  return {
    require: '^psMenu',
    scope: {
      label: '@',
      route: '@'
    },
    templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
    link: function (scope, el, attr, ctrl) {
      el.on('click', function (evt) {
        evt.stopPropagation;
        evt.preventDefault();
        scope.$apply(function () {
          ctrl.setActiveItem(el);
          ctrl.setRoute(scope.route);
        });
      });
    }
  }
});