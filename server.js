var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));

app.get('/:page', function(request, response){
	console.log('parametro',request.params.page);
  	response.sendFile(__dirname + '/app/index.html');
});

app.get('/', function(request, response){
	console.log('vacio');
  	response.sendFile(__dirname + '/app/index.html');
});

app.listen(3000, function(){
  	console.log('Server running at http://127.0.0.1:3000/');
});