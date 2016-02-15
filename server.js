var express = require('express');
var app = express();

var monte = {name: 'monte', id: 0, age: 39, gender: 'male'};
var paul = {name: 'paul', id: 1, age: 22, gender: 'male'};
var emilio = {name: 'emilio', id: 2, age: 14, gender: 'male'};
var escobar = {name: 'escobar', id: 3, age: 21, gender: 'male'};

var bears = [monte, paul, emilio, escobar];

app.get('/api/bears', function(req, res){
	res.json({bears})
});



app.listen(3000, function(){
	console.log('the server is up and running..');
});
