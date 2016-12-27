var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

//app.get('/', function (req, res) {
  //res.send('Hello Express!');
//});

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express web server started on port ' + PORT + '!');
});

