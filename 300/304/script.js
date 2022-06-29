"use strict";


    const timerId = setTimeout(function(){
        console.log("Hello");
    }, 10_000);
    console.log(timerId);
    
    const timerId2 = setTimeout(function(text){
        console.log(text);
    }, 5_000, "Hello2");
    console.log(timerId2);

    // const timerId3 = setTimeout(logger, 3000);
    // function logger(){
    //     console.log("text");
    // }
    
    // const btn = document.querySelector(".btn"); //<button class="btn">Animation</button>
    // let timerId4;
    // let i = 0;
    
    // btn.addEventListener("click", ()=>{
    //     //clearInterval()
    //     timerId4 = setInterval(logger, 500); //Присваиваем значение сетинтервала таймеру через 0,5 секунды
    // });
    // //clearInterval(timerId4) не сработает потому что значение ему присвоится через 0,5 секунды. А текущее undefined
    // //изменяем logger
    // function logger(){
    //         if (i === 3){
    //             clearInterval(timerId4);
    //         }
    //         console.log("text");
    //         i++;
    //     }
    // //Рекурсия (когда функция сама себя внутри вызывает) 
    // //setInterval(logger, 500) нарушается если функция logger будет выполнятся например 3 секунды, то следующие повторения
    // //будут запускаться сразу же без задержки, считая что 500 прошли во время выполнения функции
    // //решение - рекурсивный setTimeout - работает как setInterval но всегда ждет отведенное ему время
    // // let id = setTimeout(function log(){
    // //     console.log("text");
    // //     id = setTimeout(log, 500);
    // // }, 500);
    
    const btn = document.querySelector(".btn"); //<button class="btn">Animation</button>
    
    function myAnimation(){
        const elem = document.querySelector(".box"); //получаем элемент - квадрат <div class="box"></div>
        let pos = 0; //переменная позиции
    
        const id = setInterval(frame, 10);
        function frame() {
            if (pos == 300){ // .box { position: absolute; width: 100px; height: 100px; размер 100 на 100, размер обертки
                //wrapper { position: relative; width: 400px; height: 400px; 400 на 400 чистой площади получается 300px
                clearInterval(id);
            } else{
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    
    }
    
    btn.addEventListener("click", myAnimation);