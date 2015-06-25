learningTool.factory('factory', ['$http', '$rootScope', function($http, $rootScope) {

  var factory = {};

	
	
	/*ajax post*/
	factory.getRecords = function(url,data) {
      return $http.post(url, {
         params: data
        });
    };
	




  return factory;
  

}]);