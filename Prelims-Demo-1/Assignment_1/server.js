var http = require("http");

var server= http.createServer(function(req,res){
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>Welcome to my Node.js Application</h1><p>Welcome John Smith. THis is an activity about basics of NOde.js</p></body></html>');
        res.end();
    }

    else if (req.url == "/about") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h2>This is About Page</h2><p>Hello John Smith. Thhis activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>');
        res.end();
    }

    else if (req.url == "/contact") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h2>This is the Contact Page</h2><p>John Smith, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</p></body></html>');
        res.end();
    }
    else if (req.url == "/gallery") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h2>This is the Gallery Page</h2></body></html>');
        res.end();
    }
    else
        res.end('<html><body><h3>Invalid request</h3></body></html>')

})

server.listen(5000);
console.log("Node.js web server at port 5000 is running..")


// Name: Earn Christian Laxamana
// Section: WD-201
// Date: February 2, 2022