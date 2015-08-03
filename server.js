var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser'); 
var request = require('request');
var i18n = require('webmaker-i18n');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/www'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());   

// Internationalization Code
app.use(i18n.middleware({
  supported_languages: ['en-US', 'th-TH'],
  default_lang: 'en-US',
  mappings: require('webmaker-locale-mapping'),
  translation_directory: path.resolve(__dirname, './locale')
}));

app.get("/strings/:lang?", i18n.stringsRoute("en-US"));

var config = {};

app.get('/i18nConfig.js', function(req, res){
  config.lang = req.localeInfo.lange;
  config.direction = req.localeInfo.direction;
  config.defaultLang = 'en-US';
  config.supported_languages = i18n.getSupportLanguages();
  res.setHeader('Content-type', 'text/javascript');
  res.send('window.eventsConfig = ' + JSON.stringify(config));

});

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