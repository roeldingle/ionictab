angular.module('starter.services', [])

.factory('Factory', ['$http', '$rootScope','$ionicLoading', function($http, $rootScope, $ionicLoading) {


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

  /*show loader*/
  Factory.loader_show = function(){
    $ionicLoading.show({
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 50
    });
  };

  /*hide loader*/
  Factory.loader_hide = function(){
    $ionicLoading.hide();
  };

  return Factory;
 
   

  
}]);
