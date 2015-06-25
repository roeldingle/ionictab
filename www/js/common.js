var Common = {

	test: function(){

		alert();
	},

	//Replacement of jQuery.param
	serialize: function(obj, prefix) {

	  var str = [];
	  for(var p in obj) {
	    if (obj.hasOwnProperty(p)) {
	      var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
	      str.push(typeof v == "object" ?
	        serialize(v, k) :
	        encodeURIComponent(k) + "=" + encodeURIComponent(v));
	    }
	  }
	  return str.join("&");
	},

	callWebService: function (){

	    //create request url
	    var url = "http://straightarrowdev.com/roel/training/api/test-api.php";
	    
	    $.ajaxSetup( {beforeSend: function(jqXHR) {
	        jqXHR.setRequestHeader( "X-Auth-Token", "MC45NzQ2MzIwMCAxNDMyMTg4NzA3LTItdVVyQ3FUNzhXbUoxWjdwQzBxNjMwRzZ4QURWZ3k5c20=" );
	    }});


	}//end of method
}