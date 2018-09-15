var successPayment = function(){
  return function(app, req, res){
  var _Request = require("./_request.js");
// регистрационная информация (пароль #1)
// registration info (password #1)
var fs = require('fs');
var vars = _Request(app, req);
var md5 = require("md5");
var mrh_pass1 = "password_1";
// чтение параметров
// read parameters
var out_summ = vars["OutSum"];
var inv_id = vars["InvId"];
var shp_item = vars["Shp_item"];
var crc = vars["SignatureValue"];
var crc = crc.toUpperCase();
var my_crc = md5("${out_summ}:${inv_id}:${mrh_pass1}:Shp_item=${shp_item}").toUpperCase;
// проверка корректности подписи
// check signature

if (my_crc != crc)
{
  res.send("bad sign\n");
  return;
}


fs.readFile('journal.json', 'utf8', function(err, data){
    if (err){
        console.log(err);
    } else {
    var obj = JSON.parse(data); //now it an object
    console.log(obj);
    console.log('search ', inv_id);
    console.log(obj.operations.length);
    for (let i=0;i<=obj.operations.length-1;i++){
      console.log(i);
      if (obj.operations[i].order_num == inv_id){
        console.log('found!');
        res.send(`Операция прошла успешно\n
        Operation of payment is successfully completed\n`);
        break;
      }
      
    }
}});

}};

module.exports = successPayment;