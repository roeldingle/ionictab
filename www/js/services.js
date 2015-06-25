angular.module('starter.services', [])

.factory('Factory', ['$http', '$rootScope', function($http, $rootScope) {


  var Factory = {};

  /*ajax post*/
  Factory.getRecords = function(url,send_data) {
    
    var data = Common.serialize(send_data);
      
    return $http({
      url: url,
      method: "POST",
      data: Common.serialize(send_data),
      headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
    });

  };

  return Factory;
 
   

  
}]);
