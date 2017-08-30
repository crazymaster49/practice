"use strict";
var fs = require("fs")

fs.readFile('/etc/paths', "utf8", function(err, data){
  console.log(data);
})

  console.log("nigga")
