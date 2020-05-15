var express = require('express');
var app = express();

var path = require('path');

// serve anything out of the public directory as a static asset when requested. 
// This means the server isn't going to try and interpret the asset, it will
// merely send the entire file down to the browser as-is
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});


// http://waterfountain.herokuapp.com/index.html