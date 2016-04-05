var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));

app.get('*', function(request, response){
  response.sendFile(__dirname + '/app/index.html');
});

app.listen(3000, function(){
  console.log('Server running at http://127.0.0.1:3000/');
});