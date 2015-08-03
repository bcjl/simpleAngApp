var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser'); 
var request = require('request');

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
      if(error) { res.send(error) }
      else { res.send(body) }
    })
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});