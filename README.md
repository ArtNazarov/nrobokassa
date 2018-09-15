# nrobokassa

Robokassa nodejs
================
Модуль _request позволяет получить массив с параметрами аналогично $_REQUEST

Модуль resultPayment записывает номер и сумму оплаченного заказа в журнал

Модуль successPayment проверяет, был ли заказ оплачен

Модуль initJournal инициализирует журнал платежей в формате JSON

Модуль OrderDetails предоставляет класс для заполнения деталей заказа

Модуль nRoboKassa выводит html представление кнопок согласно данным заказа

Приложение index.js содержит маршруты /demo1, /demo2 для тестирования оплаты, /fail, /success и /result для
согласования с RoboKassa и /initJournal для сброса журнала платежей

Зависимости
============
```npm install express --save
npm install body-parser --save
npm install md5 --save```

