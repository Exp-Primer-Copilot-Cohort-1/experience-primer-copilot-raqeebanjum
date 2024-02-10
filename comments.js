// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received.");

  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log(err);
      response.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data.toString());
    }
    response.end();
  });
});

// Listen on port 8081, IP defaults to// Create a web server that listens to incoming requests
// and responds with a static file.

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  // Parse the request containing file name
  var pathname = url.parse(request.url).pathname;

  // Print the name of the file for which request is made.
  console.log("Request for " + pathname + " received.");

  // Read the requested file content from file system
  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log(err);
      // HTTP Status: 404 : NOT FOUND
      // Content Type: text/plain
      response.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      // Page found
      // HTTP Status: 200 : OK
      // Content Type: text/plain
      response.writeHead(200, { 'Content-Type': 'text/html' });

      // Write the content of the file to response body
      response.write(data.toString());
    }

    // Send the response body
    response.end();
  });
});

// Listen on port 8081, IP defaults to
// Create a web server that listens to incoming requests
// and responds with a static file.

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  // Parse the request containing file name
  var pathname = url.parse(request.url).pathname;

  // Print the name of the file for which request is made.
  console.log("Request for " + pathname + " received.");

  // Read the requested file content from file system
  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log(err);
      // HTTP Status: 404 : NOT FOUND
      // Content Type: text/plain
      response.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      // Page found
      // HTTP Status: 200 : OK
      // Content Type: text/plain
      response.writeHead(200, { 'Content-Type': 'text/html' });

      // Write the content of the file to response body
      response.write(data.toString());
    }

    // Send the response body
    response.end();
  });
});