var express = require('express');
var app = express();
var sass = require('sass')
var compass = require('compass')


app.configure('development', function(){
    app.use(express.static(__dirname + '/Template'))
})

app.get('/', function(req, res){
	res.render('index.html')
})


app.listen(3000);
console.log('Listening on port 3000');	