"use strict";
const inputHrn = document.querySelector("#hrn"),
      inputUsd = document.querySelector("#usd");

inputHrn.addEventListener("input", () => {
    const request = new XMLHttpRequest(); //создаем запрос на сервер

    request.open("GET", "js/current.json"); // запрос, остальные аргументы для нас сейчас необязательны

    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send(); // отправляем запрос на сервер

    request.addEventListener("load", () => {
        // оставляем проверку на успешное выполнение status
        if (request.status === 200) {
            const data = JSON.parse(request.response); //получаем объект JS
            //рассчитываем курс валют на основании ввода пользователя и ответа сервера и выводим в поле
            inputUsd.value = (+inputHrn.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что то пошло не так";
        }
    });
});
