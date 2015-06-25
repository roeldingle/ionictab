var teamemo = angular.module('teamemo', []);

/*route config*/
learningTool.config(function($routeProvider){
	$routeProvider.when('/home',{ 
		controller:"dashboardCtrl", 
		templateUrl:"views/v_home.php" ,
		activeTab:  "home"
	}).when('/sample',{ 
		controller:"sampleCtrl", 
		templateUrl:"views/v_sample.php" ,
		activeTab:  "math"
	

	}).otherwise({ 
		redirectTo:'/home',
		activeTab:  "home"
	}); 
});


/*common controller for navigation bar*/
function navbarController($scope,$location) {
     $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
}
