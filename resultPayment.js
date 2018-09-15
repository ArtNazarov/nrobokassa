var resultPayment = function(){
  return function(app, req, res){
// регистрационная информация (пароль #2)
// registration info (password #2)
var mrh_pass2 = "password_2";
//установка текущего времени
//current date
var timeInMs = Date.now();
var md5 = require("md5");
var _Request = require("./_request.js");
var fs = require('fs');
// чтение параметров
// read parameters
var vars = _Request(app, req);
var out_summ = vars["OutSum"];
var inv_id = vars["InvId"];
var shp_item = vars["Shp_item"];
var crc = vars["SignatureValue"];
crc = crc.toUpperCase();

var my_crc = md5("${out_summ}:${inv_id}:${mrh_pass2}:Shp_item=${shp_item}").toUpperCase();

// проверка корректности подписи
// check signature

if (my_crc != crc)
{
  res.send("bad sign\n");
  return;
}

// признак успешно проведенной операции
// success
res.send(`OK${inv_id}\n`);
fs.readFile('journal.json', 'utf8', function(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    obj.operations.push({
      order_num : inv_id,
      Summ : out_summ,
      Date :timeInMs}); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('journal.json', json, 'utf8', function(err){
      if (err) { console.log('error writing journal'); return;};
    }); // write it back 
}});


}};

module.exports = resultPayment;


