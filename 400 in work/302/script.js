"use strict";

const btns = document.querySelectorAll("button"); 

const wrapper = document.querySelector(".btn-block"); 

// wrapper.addEventListener('click', function(event){
//     if(event.target && event.target.tagName == "BUTTON"){
//         console.log("Hello!");
//     }
// });

const btn = document.createElement('button'); 
btn.classList.add('red'); 
wrapper.append(btn); 

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("Hello!");
    });
});