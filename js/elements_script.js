'use strict'

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      wrapper = document.querySelector(".wrapper"),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');  

box.style.backgroundColor = 'green';
box.style.width = '500px';

btns[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = "blue";
}

const div = document.createElement("div");
div.classList.add("black");
document.body.append(div);