'use strict';

/**
 * @ngdoc overview
 * @name tdeecalcApp
 * @description
 * # tdeecalcApp
 *
 * Main module of the application.
 */
angular
  .module('tdeecalcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
