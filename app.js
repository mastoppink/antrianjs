var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var routes = require('./routes');
var favicon = require('serve-favicon');
var path = require('path');
var nedb = require('nedb');
var restApi = require('express-nedb-rest')();

//database
var loket = new nedb({filename: './model/loket.db', autoload: true});
var setting = new nedb({filename: './model/setting.db', autoload: true});
var jenisLoket = new nedb({filename: './model/jenisloket.db', autoload: true});
var antrian = new nedb({filename: './model/antrian.db', autoload: true});
var video = new nedb({filename: './model/video.db', autoload: true});
var monitor = new nedb({filename: './model/monitor.db', autoload: true});
var antripanggil = new nedb({filename: './model/antripanggil.db', autoload: true});

restApi.addDatastore('loket', loket);
restApi.addDatastore('setting', setting);
restApi.addDatastore('jenisloket', jenisLoket);
restApi.addDatastore('antrian', antrian);
restApi.addDatastore('video', video);
restApi.addDatastore('monitor', monitor);
restApi.addDatastore('antripanggil', antripanggil);

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
app.use('/api', restApi);
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);


app.get('*', routes.index);

http.listen(port, function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});