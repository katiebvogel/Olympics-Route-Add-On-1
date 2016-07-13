var express = require('express');
var index = require('./routes/index');
//var bodyParser = require('bodyParser');
var archery = require('archery');
var canoekayak = require('canoekayak');
var modpent = require('modpent');
var syncswim = require('syncswim');
var taekwondo = require('taekwondo');

var app = express();

//Configs
app.use(bodyParser());

//Routers
app.use('/', index);
app.use('/', archery);
app.use('/', canoekayak);
app.use('/', modpent);
app.use('/', syncswim);
app.use('/', taekwondo);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Server running on port', port);
});
