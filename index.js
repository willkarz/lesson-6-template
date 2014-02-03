var express = require('express'),
    path = require('path'),
    http = require('http'),
    routes = require('./routes/routes.js');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
app.use(express.json());
app.use(express.urlencoded());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

routes.init(app);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});