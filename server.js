var express = require('express');
var app = new express();
app.get('/:input?', function (req, res, next) {
   var input = req.params.input;
   var resJson = {
       unix: null,
       natural: null
   };
   if (input === undefined) return res.json(resJson);
   
});

app.listen(8080, function () {
   console.log('Server listening at port : 8080');
});