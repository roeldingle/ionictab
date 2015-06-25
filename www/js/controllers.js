angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

})

/*Chat controller*/
.controller('ChatsCtrl', function($scope, Factory, $http) {

  var url = "http://straightarrowdev.com/roel/training/api/test-api.php";
  var send_data = {
    api_type: "select",
    tb_name: "tbl_users"
  };

  var records = Factory.getRecords(url,send_data);


  /*ajax return process*/
  records.then(function(response){
    console.log(response.data);
    $scope.chats = response.data;
  });



  
  $scope.remove = function(chat) {
    Factory.remove(chat);
  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Factory) {

  
  var url = "http://straightarrowdev.com/roel/training/api/test-api.php";
  var send_data = {
    field_query: "id = " + $stateParams.chatId
  };
  var records = Factory.getSpecificRecords(url,send_data);

   /*ajax return process*/
  records.then(function(response){
    //$scope.chats = response.data;

    console.log(response.data);
  });
  
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
