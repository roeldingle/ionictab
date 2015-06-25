learningTool.factory('factory', ['$http', '$rootScope', function($http, $rootScope) {

  var factory = {};

	factory.getUsers = function(send_data) {
  
      return $http.post('models/model.php', {

       params: send_data

      }).then(function(response) {
      records = response.data;
      return records;
    });
  };

  /*get default result images*/
  factory.getDefaultResultImage = function(question_count) {
      var result_image = [];
      var default_result_image = 'wrong.jpg';

      for(i = 1; i <= parseInt(question_count);i++){
          result_image.push(default_result_image);
      }

      return result_image;
    };


    /*get answer and check*/
  factory.getResultImage = function(id,user_answer,correct_answer){

    var result = (user_answer == correct_answer) ? "correct" : "wrong";
    return result+'.jpg';

   };


  /*will get total score*/
  factory.getScore = function(scope_data,controller){
      var score = [];
	  
	  switch(controller){
		case "math":
		angular.forEach(scope_data.questionaires, function(val,index){
			var user_answer = scope_data.user_answer[index];
			var correct_answer = scope_data.getAnswer(val);
			(user_answer == correct_answer) ? score.push(1) : score.push(0);
		  });
		break;
		
		case "spelling":
		angular.forEach(scope_data.questionaires, function(val,index){
			var user_answer = scope_data.getUserAnswer(index);
			var correct_answer = scope_data.getAnswer(val);
			(user_answer == correct_answer) ? score.push(1) : score.push(0);
		  });
		break;
	  
	  
	  }
      
      
      return eval(score.join('+'));
  };
  
  
	/*reset fields before test create*/
	factory.resetTest = function(scope_data){

		scope_data.showBtnShow = true;
		scope_data.resultShow = false;
		scope_data.viewSettings = false;

		angular.forEach(scope_data.questionaires, function(value, key){
		  scope_data.user_answer[key] = '';
		});
		
	};
	
	/*ajax post*/
	factory.getRecords = function(data) {
      return $http.post('models/model.php', {
         params: data
        });
    };
	




  return factory;
  

}]);