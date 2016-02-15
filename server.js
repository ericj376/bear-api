var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var monte = {name: 'monte', id: 0, age: 39, gender: 'male'};
var paul = {name: 'paul', id: 1, age: 22, gender: 'male'};
var emilio = {name: 'emilio', id: 2, age: 14, gender: 'male'};
var escobar = {name: 'escobar', id: 3, age: 45, gender: 'male'};

var bears = [monte, paul, emilio, escobar];

app.get('/api/bears', function(req, res){
	res.json({bears})
});

app.get('/api/bear/:id', function(req, res){
	var id = Number(req.params.id);
		
		
		bears.forEach(function(lookingBear){
		if(lookingBear.id === id){
		res.json(lookingBear);	
		}
		
	});

});


app.post('/api/bear', function(req, res){

	console.log("Bears are about to go down!");

	var newBear = {};
	newBear.name = req.body.name;
	newBear.age = req.body.age;
	newBear.gender = req.body.gender;
	newBear.id = new Date().getTime();

	console.log('pushing: ', newBear);

	bears.push(newBear);

	res.json(bears);


});



app.listen(3000, function(){
	console.log('the server is up and running..');
});
