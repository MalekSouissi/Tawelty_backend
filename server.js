var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const cors = require('cors');
 app.use(cors());
require('./app/router/router.js')(app);

 
 
 
 
//require('./app/route/project.route.js')(app);
 
// Create a Server
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})


 