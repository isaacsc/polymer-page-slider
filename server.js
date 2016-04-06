// SERVIDOR QUE ANTE CUALQUIER PETICIÓN DEVUELVE index.html SALVO LAS EXCEPCIONES PROGRAMADAS
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req, res, next) {
  // EXPRESION REGULAR para las excepciones
  // Si termina en .css, .js o .json.
  // Si en la ruta viene assets/img o bower_components o elements 
  var rexp = new RegExp(/\.css$|\.js$|\.json$|assets\/img|bower_components|elements/g);
  var result = req.path.match(rexp);
  if ( result !== null ) {
    // SI HAY RESULTADOS DE LAS EXCEPCIONES LO SERVIMOS
    console.log("serving "+req.url);
    next();
  } else {
    // SI NO HAY EXCEPCIONES ENVIAMOS index.html 
    res.sendFile(__dirname + '/app/index.html');
  }
});

app.use(express.static(__dirname + '/app'));

app.listen(process.env.PORT || 3000);

console.log("Server: http://localhost:3000");


// var express = require('express');
// var app = express();
// app.use(express.static(__dirname + '/app'));

// app.get('/:page', function(request, response){
// 	console.log('parametro',request.params.page);
//   	response.sendFile(__dirname + '/app/index.html');
// });

// app.get('/', function(request, response){
// 	console.log('vacio');
//   	response.sendFile(__dirname + '/app/index.html');
// });

// app.listen(3000, function(){
//   	console.log('Server running at http://127.0.0.1:3000/');
// });