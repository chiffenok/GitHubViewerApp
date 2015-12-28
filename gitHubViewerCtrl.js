(function(){
	var app = angular.module('gitHubViewerApp');

	var GitHubViewerCtrl = function ($scope, $location, $interval) {

		var decrementCountdown = function() {
			$scope.countdown -= 1;
			if ($scope.countdown < 1) {
				$scope.search($scope.username);
			}
		};

		var countDowninterval = null;
		var startCountdown = function() {
			countDowninterval = $interval(decrementCountdown, 1000, $scope.countdown);

		};

		// var onError = function (reason) {
		// 	$rootScope.error = "Error";
		// };


		$scope.search = function (username) {
			if (countDowninterval) {
				$interval.cancel(countDowninterval);
				$scope.countdown = null;
			}
		};

		$scope.username = "angular";
		$scope.countdown = 10;
		startCountdown(); 
	};

	app.controller("GitHubViewerCtrl", GitHubViewerCtrl);

}());