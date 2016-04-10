var express = require('express');
var app = express();
var path = require("path");

app.set('port', (process.env.PORT || 5000));

app.get("/", function (req, res) {


    res.sendFile(path.join(__dirname + '/index.html'));


});


app.get('/:data', function (req, res) {

    var d = req.params.data

    var dataObject = new Date(d);

    var unix = Date.parse(d);

    var month = "";
    
    switch (dataObject.getMonth()) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
    }

    var day = dataObject.getDate();
    var year = dataObject.getFullYear();

    var natural = month + " " + day + ", " + year;

    if (dataObject == "Invalid Date") {
        res.json({
            unix: "null",
            natural: "null"
        });
    }

    res.json({
        unix: unix,
        natural: natural
    });
});



app.listen(app.get('port'), function () {
    console.log('Example app listening on port', app.get('port'));
});