angular.module('tdee', []).controller('TdeeCtrl', function($scope, $locale) {
    $scope.bmr = 0;
    $scope.customMultiplier = 1.9;

    $scope.age = 35;
    $scope.height = 183;
    $scope.sex = "male";
    $scope.weight = 83;


    lbToKg = function(w) {
        return w * 0.463592;
    };

    kgToLb = function(w) {
        return w * 2.20462;
    };

    inToCm = function(h) {
        return h * 2.54;
    };

    cmToIn = function(h) {
        return h * 0.393701;
    };

    $scope.sexWeight = function() {
        if ($scope.sex == "male") return 5;
        return -161;
    };

    $scope.calcTdee = function() {
        $scope.bmr = 10 * $scope.weight + 6.25 * $scope.height - 5 * $scope.age + $scope.sexWeight();
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
