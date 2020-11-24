const http = new easyHTTP;

// Get POSTs
const posts = http.get('', function(err,posts){
	if(err){
		console.log(err);
	}else{
	console.log(posts);
	}
})

