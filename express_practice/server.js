'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.use(function(req, res){
  res.send("My name is JEFF")
});

app.listen(port,function(){
  console.log("we ready" , port)
});
