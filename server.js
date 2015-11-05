'use strict';

var express = require('express');
var app = express();
var path = require('path');
var clc = require('cli-color');
var port = process.env.PORT || 3000;
var time = new Date();

app.use(express.static(__dirname + '/'));

app.route('/')
.get(function (req, res) {
	res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(port, function () {
	console.log(clc.cyanBright('server started on port ' + port + ' at ' + time));
});
