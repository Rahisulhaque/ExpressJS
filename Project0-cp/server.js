


const	express = require('express'); // make sure that you have run npm installl express --save 
const	path = require('path'); //path is core module


const	app = express();



app.use(express.static(path.join(__dirname, 'public')));





app.listen(3000, function(){
	console.log('Server is running in port: 3000');
});

