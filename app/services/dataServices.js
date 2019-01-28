"use strict";

angular.module('app').factory('dataService', [
  '$timeout',
  function ($timeout) {
    var employees = [{id: 1000, name: 'employee', location: 'lima'}];
    var locations = [{id: 1000, name: 'name', temperature: 100}];

    var getLocations= function () {
      return $timeout(function () {
        return locations;
      }, 500);
    };

    var getLocation = function (id) {
      return $timeout(function () {
        for (var i = 0; i<locations.length; i++) {
          if(locations[i].id == id) {
            return locations[i];
          }
        }
        return undefined;
      }, 300);
    };

    var getEmployees = function () {
      return $timeout(function () {
        return employees;
      }, 500);
    };

    var getEmployee = function (id) {
      return $timeout(function () {
        for (var i = 0; i<employees.length; i++) {
          if(employees[i].id == id) {
            return employees[i];
          }
        }
        return undefined;
      }, 300);
    };

    return {
      getEmployee: getEmployee,
      getEmployees: getEmployees,
      getLocation: getLocation,
      getLocations: getLocations
    }
  }]);