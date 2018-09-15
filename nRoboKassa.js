module.exports = class nRoboKassa {  
htmlPayment(orderDetails){

return `<html><script
      " src='https://auth.robokassa.ru/Merchant/PaymentForm/FormFLS.js?"  "MrchLogin=${orderDetails.mrh_login}&OutSum=${orderDetails.out_summ}&InvId=${orderDetails.inv_id}&IncCurrLabel=${orderDetails.in_curr}".
      "&Desc=${orderDetails.inv_desc}&SignatureValue=${orderDetails.getCrc()}&Shp_item=${orderDetails.shp_item}".
      "&Culture=${orderDetails.culture}&Encoding=${orderDetails.encoding}'></script></html>"
      `;
}
}
