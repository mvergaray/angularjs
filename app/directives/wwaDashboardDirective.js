"use directive";

angular.module('app').directive('wwaDashboard', [function () {
  return {
    scope: {

    },
    template: '<ps-dashboard></ps-dashboard>',
    link: function (scope) {
      scope.title = 'My First Dashboard';
      scope.widgets = [
        {
          title: 'First',
          template: '<temperature></temperature>',
          widgetSettings: {
            id: 1000
          }
        },
        {
          title: 'Second',
          template: '<inventory></inventory>',
          widgetSettings: {
            id: 1000
          }
        },
        {
          title: 'Third',
          template: '<employee></employee>',
          widgetSettings: {
            id: 1000
          }
        }
      ];


    }
  }
}]);