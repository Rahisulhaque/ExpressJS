 var express = require("express");
 var http = require("http");

 var app = express();

 app.use((request, response)=>{
     console.log("In come a request to: " + request.url);
     response.end("Hello World.\n");
 });
http.createServer(app).listen(3000);