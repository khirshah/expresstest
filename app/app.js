const http = require('http');
const qs = require('qs');

function postData(){
	
	const postD = qs.stringify({
		message:"Hello world!"
	})

	const options = {
		host: "localhost",
		port: 3000,
		path:"/post",
		method: "POST",
		headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postD)
  	}
	}

	const req = http.request(options, (res) => {
		console.log(res.statusCode);
	})

	req.on('error', (e) => {
		console.log(e.message);
	})
	
	req.write(postD);

	console.log(req.output);

	req.end();

}

postData();