var express = require('express');
var app = express();
var path = require("path");
var accepts = require('accepts');
var useragent = require('useragent');

app.set('port', (process.env.PORT || 5000));

//app.get("/", function (req, res) {
//
//
//    res.sendFile(path.join(__dirname + '/index.html'));
//
//
//});


app.get('/', function (req, res) {

    var accept = accepts(req);
    var agent = useragent.parse(req.headers['user-agent']);
    //res.send(req.acceptsLanguages());
    var language = accept.language()[0];
    var operatingSys = agent.os.family;
    var ip = req.ip
    
    
res.json({ipaddress: ip, language: language, software: operatingSys }); 
    
    
   
});



app.listen(app.get('port'), function () {
    console.log('Example app listening on port', app.get('port'));
});