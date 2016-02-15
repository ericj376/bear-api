var express = require('express');
var app = express();

app.get('/api/bears', function(req, res){
	res.json({title: 'does it work?', body: 'I hope so..'})
});



app.listen(3000, function(){
	console.log('the server is up and running..');
});
