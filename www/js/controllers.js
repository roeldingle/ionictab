angular.module('starter.controllers', [])

  
  /*Memo controller*/
  .controller('MemoCtrl', function($scope, Factory, $http) {

    Factory.loader_show();
    var url = "http://straightarrowdev.com/roel/training/api/test-api.php";
    var send_data = {
      api_type: "select",
      tb_name: "tb_memo"
    };

    var oAjax = Factory.getRecords(url,send_data);

    /*ajax return process*/
    oAjax.then(function(response){
      $scope.memos = response.data;
      Factory.loader_hide();
    });
  })

  /*Add Memo controller*/
  .controller('AddMemoCtrl', function($scope, Factory, $http) {

   
  })

  /*Chat controller*/
  .controller('ChatsCtrl', function($scope, Factory, $http) {

    Factory.loader_show();
    var url = "http://straightarrowdev.com/roel/training/api/test-api.php";
    var send_data = {
      api_type: "select",
      tb_name: "tb_users"
    };

    var oAjax = Factory.getRecords(url,send_data);


    /*ajax return process*/
    oAjax.then(function(response){
      $scope.chats = response.data;
      Factory.loader_hide();
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
