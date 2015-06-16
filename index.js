var express = require('express');

var app = express();
app.set('view engine','jade')
app.use(express.static('bower_components'))

app.get('/',function(req,res){
	res.render("index", {title:Poll});
})


var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app is listening on host:%s:%s',host,port);
})