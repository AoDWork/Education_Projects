'use strict';
const box = document.querySelector(".box");
const style = window.getComputedStyle(box); // получаем объект из элемента 

// Можно также обратиться к конкретном свойству
console.log(style); // block