const	
	http = require('http'),
	hostname ='127.0.0.1',	
	port = 1426;

const	server = http.createServer((req, res) =>{
	res.Statuscode = 200;
	res.setHeader('Content-type' , 'Text/plain');
	res.end('Hello World');
});

server.listen(port, hostname, () => {
	console.log('Server is running on' + port + 'check this out: ' + hostname);
});
