// Server.js
var express = require('express');
var app = express();


// Our first route
app.get('/', function (req, res) {
    res.send('Hello Kachifooo!');
}); 


// Our second route
app.get('/about', function (req, res) {
    res.send('Kachifoo is built with pride');
}); 


// Listen to port 5000
app.listen(5000, function() {
    console.log('Kachifoo app listening on port 5000!')
});