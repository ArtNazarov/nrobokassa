module.exports = class OrderDetails {
constructor(){
// регистрационная информация
this.mrh_login = "demo";
this.mrh_pass1 = "password_1";

// номер заказа
// number of order
this.inv_id = 0;

// описание заказа
// order description
this.inv_desc = "ROBOKASSA Advanced User Guide";

// сумма заказа
// sum of order
this.out_summ = "8.96";

// тип товара
// code of goods
this.shp_item = 1;

// предлагаемая валюта платежа
// default payment e-currency
this.in_curr = "";

// язык
// language
this.culture = "ru";

// кодировка
// encoding
this.encoding = "utf-8";
}
getCrc(){
  var md5 = require('md5');
  return md5(`${this.mrh_login}:${this.out_summ}:${this.inv_id}:${this.mrh_pass1}:S{this.hp_item}=${this.shp_item}`);
}
}