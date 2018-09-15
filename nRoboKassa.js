module.exports = class nRoboKassa {  
htmlPayment(orderDetails){

return `<html><script
      " src='https://auth.robokassa.ru/Merchant/PaymentForm/FormFLS.js?"  "MrchLogin=${orderDetails.mrh_login}&OutSum=${orderDetails.out_summ}&InvId=${orderDetails.inv_id}&IncCurrLabel=${orderDetails.in_curr}".
      "&Desc=${orderDetails.inv_desc}&SignatureValue=${orderDetails.getCrc()}&Shp_item=${orderDetails.shp_item}".
      "&Culture=${orderDetails.culture}&Encoding=${orderDetails.encoding}'></script></html>"
      `;
}
htmlPaymentCurr(orderDetails, buttonCaption){
return `<html><body>
      <form action='https://merchant.roboxchange.com/Index.aspx' method='POST'>
      <input type=hidden name=MrchLogin value=${orderDetails.mrh_login}>
      <input type=hidden name=OutSum value=${orderDetails.out_summ}>
      <input type=hidden name=InvId value=${orderDetails.inv_id}>
      <input type=hidden name=Desc value='${orderDetails.inv_desc}'>
      <input type=hidden name=SignatureValue value=${orderDetails.getCrc()}>
      <input type=hidden name=Shp_item value='${orderDetails.shp_item}'>
      <input type=hidden name=IncCurrLabel value=${orderDetails.in_curr}>
      <input type=hidden name=Culture value=${orderDetails.culture}>
      <input type=submit value='${buttonCaption}'>
      </form></body></html>`;
}
}
