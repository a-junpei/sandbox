function Calc($scope) {
	$scope.init = function() {
		$scope.num1 = 0;
		$scope.num2 = 0;
	}
	$scope.result = function() {
		return parseInt($scope.num1) + parseInt($scope.num2);
	}
}
