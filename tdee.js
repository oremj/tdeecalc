angular.module('tdee', []).controller('TdeeCtrl', function($scope, $locale) {
    $scope.tdeeRes = 0;

    $scope.age = 35;
    $scope.height = 72;
    $scope.sex = "male";
    $scope.units = "imperial";
    $scope.weight = 185;

    $scope.setUnits = function() {
        if ($scope.units == "metric") {
            $scope.weightUnit = "Kilograms";
            $scope.heightUnit = "Centimeters";
            return;
        }
        $scope.weightUnit = "Pounds";
        $scope.heightUnit = "Inches";
    };
    $scope.lbToKg = function(w) {
        if ($scope.units == "metric") return w;
        return w * 0.463592;
    };
    $scope.inToCm = function(h) {
        if ($scope.units == "metric") return h;
        return h * 2.54;
    };

    $scope.sexWeight = function() {
        if ($scope.sex == "male") return 5;
        return -161;
    };

    $scope.calcTdee = function() {
        $scope.setUnits();

        var weight = $scope.lbToKg($scope.weight);
        var height = $scope.inToCm($scope.height);
        $scope.tdeeRes = Math.round(10 * weight + 6.25 * height - 5 * $scope.age + $scope.sexWeight());
    };

    $scope.setUnits();
    $scope.calcTdee();
});
