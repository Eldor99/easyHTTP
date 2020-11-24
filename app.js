const http = new easyHTTP;

// Get POSTs
// const posts = http.get('', function(err,posts){
// 	if(err){
// 		console.log(err);
// 	}else{
// 	console.log(posts);
// 	}
// })


// Create Data
const data = {
	title: 'Custom Post',
	body: 'This is a custom post'
};

// http.post('', data ,function(err, post) {
// 		if(err){
// 			console.log(err);
// 		}else{
// 			console.log(post);
// 		}

// });

// Update Post
// http.put('',data, function(err, post){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(post);
// 	}
// })

// Delete Post
http.delete('',data, function(err, post){
	if(err){
		console.log(err);
	}else{
		console.log(post);
	}
})