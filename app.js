var express = require("express");
var app = express();

var port = 4000;

app.get("/", (req, res) => {
  res.send({
    status: "1.4"
  });
});

var fs = require('fs');

var path = 'upload/file.txt',
buffer = new Buffer("some content\n");

//var stream = fs.createWriteStream("my_file.txt");
var stream = fs.createWriteStream(path);
stream.once('open', function(fd) {
  stream.write("My first row\n");
  stream.write("My second row\n");
  stream.end();
});

app.listen(port, () => {
  console.log(`Hello World server listening on port ${port}`);
});
