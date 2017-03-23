var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var routes = require('./routes');
var favicon = require('serve-favicon');
var path = require('path');
var model = require('./db/db.js');

var port = "80";
app.set('view engine', 'pug');
app.set('views', './views')
app.locals.pretty = true;
app.disable('x-powered-by');

io.on('connection', function(socket){
	socket.on('sebarkan', function(data){
		socket.broadcast.emit(data.for, data.content);
	});
});

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.get('*', routes.index);

http.listen(port, function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});