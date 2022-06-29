"use strict";
let start = new Date();
        
        for (let i = 0; i < 100000; i++){
            let some = i ** 3; // i возводим в степень 3
        }
        
        let end = new Date();
        alert(`Цикл выполнился за ${end - start} миллисекунд`);