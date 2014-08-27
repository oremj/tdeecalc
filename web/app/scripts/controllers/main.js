'use strict';

/**
 * @ngdoc function
 * @name tdeecalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tdeecalcApp
 */
angular.module('tdeecalcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.bmr = 0;
    $scope.customMultiplier = 1.9;

    $scope.age = 35;
    $scope.bodyfat = 20;
    $scope.formula = 'mifflin';
    $scope.height = 183;
    $scope.sex = 'male';
    $scope.weight = 83;
    $scope.goalLbs = 0;

    function lbToKg(w) {
      return w * 0.463592;
    }

    function kgToLb(w) {
      return w * 2.20462;
    }

    function inToCm(h) {
      return h * 2.54;
    }

    function cmToIn(h) {
      return h * 0.393701;
    }

    function mifflin(h, w, age, sex) {
      var sexWeight = sex === 'male' ? 5 : -161;
      return 10 * w + 6.25 * h - 5 * age + sexWeight;
    }

    function katchMcArdle(lbm) {
      return 370 + (21.6 * lbm);
    }

    $scope.calcTdee = function() {
      if($scope.formula === 'katch') {
        $scope.bmr = katchMcArdle($scope.weight * ((100 - $scope.bodyfat) / 100));
        return;
      }
      $scope.bmr = mifflin($scope.height, $scope.weight, $scope.age, $scope.sex);
    };

    $scope.updateLb = function() {
      $scope.weight = Math.round(lbToKg($scope.weightLb));
      $scope.calcTdee();
    };

    $scope.updateIn = function() {
      var inches = $scope.heightFt * 12 + $scope.heightIn;
      $scope.height = Math.round(inToCm(inches));
      $scope.calcTdee();
    };

    $scope.updateCm = function() {
      var inches = Math.round(cmToIn($scope.height));
      $scope.heightFt = Math.floor(inches / 12);
      $scope.heightIn = Math.round(inches - 12 * $scope.heightFt);
      $scope.calcTdee();
    };

    $scope.updateKg = function() {
      $scope.weightLb = Math.round(kgToLb($scope.weight));
      $scope.calcTdee();
    };

    $scope.updateKg();
    $scope.updateCm();
    $scope.calcTdee();
  });
