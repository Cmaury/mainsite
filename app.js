var express = require('express');
var app = express();
var sass = require('sass')
var compass = require('compass')
var fs = require('fs')



app.configure('development', function(){
    app.use(express.static(__dirname + '/Template'))
})

app.use(express.bodyParser());

app.get('/', function(req, res){
	res.render('index.html')
})

app.post('/email', function(req,res){
	console.log('boop')
	console.log(req.body)
	fs.appendFile("emails.txt", Date() + " " +JSON.stringify(req.body) + "\n", function(err) {
    	if(err) {
        	console.log(err);
        	res.end()
    	} 
    	else {
        	console.log("The file was saved!");
        	res.end()
    	}
	})
	return
})

app.post('/contact', function(req,res){
	console.log('boop')
	console.log(req.body)
	fs.appendFile("contacts.txt", Date() + " " +JSON.stringify(req.body) + "\n", function(err) {
    	if(err) {
        	console.log(err);
        	res.end()
    	} 
    	else {
        	//console.log("The file was saved!");
     		res.send(200, "does this get passed?")
    	}
	})
	return
})

app.listen(5000);
console.log('Listening on port 5000');	