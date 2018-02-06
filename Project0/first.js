const	
	express = require('express'),
	app = express();

//This is the basic route
app.get('/', function(req, res){
	res.send('Hello World');
});
// Custome route. I am using ES6 arrow func
app.get('/about', (req, res) =>{
	res.send('<h1>About</h1>');
});

//Here I'm sending parameter (params) to route, it has to be dynamic

app.get('/user/:name',(req, res) =>{
	let name = req.params.name;
	res.send('<h1>' + name + '</h1>');
});
app.listen(3000, function(){
	console.log('Server is running');
});


