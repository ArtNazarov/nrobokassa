var express = require('express');
var app = express();
var nRoboKassa = require("./nRoboKassa.js");
var OrderDetails = require('./OrderDetails.js'); 
var _Request = require("./_request.js");

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
app.get('/fail', function(req, res){
  var vars = _Request(app, req);
  var inv_id = vars["InvId"];
 res.send(`Вы отказались от оплаты. Заказ# ${inv_id}\n"
          "You have refused payment. Order# ${inv_id}\n`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
