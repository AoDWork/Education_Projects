"use strict";
const btn = document.querySelector(".btn"); //<button class="btn">Animation</button>

function myAnimation() {
  const elem = document.querySelector(".box"); //получаем элемент - квадрат <div class="box"></div>
  let pos = 0; //переменная позиции

  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      // .box { position: absolute; width: 100px; height: 100px; размер 100 на 100, размер обертки
      //wrapper { position: relative; width: 400px; height: 400px; 400 на 400 чистой площади получается 300px
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);
