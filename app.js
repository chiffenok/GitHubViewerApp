(function(){
	var app = angular.module('gitHubViewerApp', ['ngRoute']);



	app.config(function($routeProvider, $locationProvider) {
			$routeProvider.
			when('/main', {
				templateUrl: 'main.html',
				controller: 'GitHubViewerCtrl'
			}).
			otherwise({
				redirectTo: '/main'
			});
		});
}());