(function(){
	 var app = angular.module("gitHubViewerApp", []);

	var GitGubViewerCtrl = function ($rootScope, gitHub, $anchorScroll, $location, $log ) {

		var onUserComplete = function (data) {
			$rootScope.user = data;
			gitHub.getRepos($rootScope.user).then(onRepos, onError);
		};

		var onRepos = function (data) {
			$rootScope.repos = data;
			$location.hash("userDetails");
			$anchorScroll();
		}

		var onError = function (reason) {
			$rootScope.error = "Error";
		};

		$rootScope.search = function (username) {
			$log.info("You are searching for " + username);
			gitHub.getUser(username).then(onUserComplete, onError);
		};

		$rootScope.repoSortOrder = "+name";
		$rootScope.username = "angular";
	};

	app.controller("GitHubViewerCtrl", ["$rootScope", "gitHub", "$anchorScroll", "$location", "$log", GitGubViewerCtrl]);

}());