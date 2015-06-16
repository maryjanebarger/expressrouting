var express = require('express');
var app = express();

app.get('/about', function(req, res) {
    res.send('<h1>About Us</h1>');
});

app.get('/about/:title', function(req, res) {
    res.send('<h1>'+req.params.title+'</h1>');
});

// Order is important. Don't want this first or will always route here
app.get('/', function(req, res) {
    res.send('<h1> Welcome to my home page</h1>');
});
        
console.log("Express server started on localhost:3000!");
app.listen(3000);