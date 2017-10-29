

//a promise func that getting the url and returning result from tha ajax request or error

export const nytGetApi = function(url){ //reciving url parameter with key and link
	return new Promise ((resolve,reject) => {//using a promise

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  $( ".article" ).remove();//removing old results form old select
		resolve(result); //returning result from successful request
			
	})
	.fail(function(err) { //returning error for unsuccessful request
	  reject(err);
	});
	})
};
