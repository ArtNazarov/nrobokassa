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
```
npm install express --save
npm install body-parser --save
npm install md5 --save
```

Установите forever или nodemon для запуска процесса

Пуск сервиса
============
```
nodemon index.js
```
или
```
forever start index.js
```

DISCLAIMER 
===========
This program comes absolutely free and with no warranty. 
You must use this code and it derivatives at your own risk. 
Do what you want with this code, it's not our problem

ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ
========================
Этот код предоставляется совершенно бесплатно и без гарантий
Вы используете его или его производные на свой страх и риск
Чтобы Вы не делали с этим кодом, это не наша проблема