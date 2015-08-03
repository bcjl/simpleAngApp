var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser'); 
var request = require('request');
var loggly = require('loggly');

var client = loggly.createClient({
  token: "75264f8f-5618-46e3-bf5a-a44ad23d0391",
  subdomain: "brianliu",
  tags: ["NodeJS"],
  json: true
});


var app = express();

app.use(express.static(__dirname + '/www'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());   


app.post('/api/login', function(req, res){
  request({
    url: 'http://t001-005-001-02a.elasticbeanstalk.com/api',
    method: 'POST',
    json: req.body,
    }, 
    function(error, response, body){
      if(error) { 
        client.log("Error occurred while POSTing to Auth API: " + JSON.stringify(req.body));
        res.send(error);
      } else { 
        client.log("Login Attempt By: "+ JSON.stringify(req.body));
        res.send(body) 
      }
    })
})



var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  client.log('Server started');

});