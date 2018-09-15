var express = require('express');
var app = express();
var nRoboKassa = require("./nRoboKassa.js");
var OrderDetails = require('./OrderDetails.js'); 
app.get('/demo1', function (req, res) {
  var od = new OrderDetails();
  var nrk = new nRoboKassa();
  res.send(nrk.htmlPayment(od));
  
});
app.get('/demo2', function (req, res) {
  var od = new OrderDetails();
  var nrk = new nRoboKassa();
  res.send(nrk.htmlPaymentCurr(od, 'Pay!'));
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
