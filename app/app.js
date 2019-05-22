const http = require('http');
const qs = require('qs');

function postData(){
	
	const postD = qs.stringify({
		animal:{
			name: "dog",
			legs: 4,
			sound: "wof"
		}
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

function getData(){

	const options = {
		host: "localhost",
		port: 3000,
		path:"/",
		method: "GET"
	}

	const req = http.request(options,(res) => {

	  res.setEncoding('utf8');
	  
	  res.on('data', (chunk) => {
	    console.log(`BODY: ${chunk}`);
	  });
	  
	  res.on('end', () => {
	    console.log('No more data in response.');
	  });
	});

	req.on('error', (e) => {
  	console.error(`problem with request: ${e.message}`);
	});

	req.end();
}
//postData();
getData();