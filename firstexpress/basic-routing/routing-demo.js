// name: Earn Christian Laxamana
// App Name: routing-demo.js
// Description: This progam is a basic routing
var express= require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("A GET request for the homepage is accessed");
    res.send('Here is the GET Method');
})

app.post('/', function (req, res) {
    console.log("A POST request for the homepage is accessed");
    res.send('Here is the POST Method');
})

app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('This is Page Listing');
})

app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cdr");
    res.send('Pattern Match Page');
})

app.get('/hello', function (req, res) {
    console.log("Got a GET request for /hello");
    res.send('HELLO WORLDDDD!!!!!!!');
})

app.get('/my_name', function (req, res) {
    console.log("Got a GET request for /my_name");
    res.send('My name is Earn Christian Laxamana');
})

var server = app.listen(5000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://&s:&s", host, port)
})