var express = require('express')
  , app = express()
  , port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/static'));
app.listen(port);

// app.get('/', function (req, res) {
//
// });
