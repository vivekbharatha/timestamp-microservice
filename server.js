var express = require('express');
var app = new express();
var strftime = require('strftime');
app.get('/:input?', function (req, res, next) {
   var input = req.params.input;
   var resJson = {
       unix: null,
       natural: null
   };
   if (input === undefined) return res.json(resJson);
   
   var date = new Date(input);
   console.log('input', input, 'date', date, '\n-------------');
   
   resJson.unix = Math.floor(date.getTime()/1000);
   resJson.natural = strftime('%B %e, %Y', date);
   
   return res.json(resJson);
   
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
   console.log('Server listening at port : 8080');
});