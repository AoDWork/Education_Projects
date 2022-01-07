"use strict";

let personalMovieDB = {
    count:  0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
            
                while(personalMovieDB.count == ""||personalMovieDB.count ==null || isNaN(personalMovieDB.count ) ){
                    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
                }
            },
    rememberMyFilms: function (){
                        for (let i = 0; i < 2; i++) {
                            let a = prompt("Последний просмотренный фильм?", "");
                            let b = prompt("Оцените этот фильм.", "");
                        
                            if(a != null && b != null && a != "" && b != "" && a.length < 50){
                                personalMovieDB.movies[a] = b;
                                console.log("Job's Done");
                            }else{
                                console.log("Error");
                                i--;
                            }
                        }
                    },
    detectPersonalLevel: function (){
        if(personalMovieDB.count < 10){
            document.write("Просмотрено мало фильмов");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            document.write("Вы классический зритель");
        }else if(personalMovieDB.count >= 30){
            document.write("Вы киноман");
        }else{
            document.write("Произошла ошибка");
        }
    },
    showMyDB: function (hidden){
                    if(!hidden){
                        console.log(personalMovieDB);
                    }
                },
    writeYourGenres: function () {
                        //Method cycling
                        // for (let i = 1; i <= 3; i++) {
                        //     let a = prompt(`Ваш любимый жанр под номером ${i}`, "");
                            
                        //     if(a != null && a != ""){
                        //         personalMovieDB.genres[i-1] = a;
                        //         console.log("Job's Done");
                        //     }else{
                        //         console.log("Error");
                        //         i--;
                        //     }
                        // }
                        //Method for all values in massive
                        for (let i = 1; i < 2; i++) {  //decrease i that cycle has 1 itteration
                            let all = prompt(`Введите ваши любимые жанры через запятую.`, "").toLowerCase();
                            
                            if(all != null && all != ""){
                                personalMovieDB.genres = all.split(", ");
                                personalMovieDB.genres.sort();
                                console.log("Job's Done");
                            }else{
                                console.log("Error");
                                i--; //Decrease increament for back in one itteration back
                            }
                        }

                        personalMovieDB.genres.forEach( (value, index ) => {
                                                            console.log(`Любимый жанр #${index+1} - это ${value}`);
                                                        }
                        );
                    },
    toggleVisibleMyDB: function(){
                           if (personalMovieDB.privat){
                            personalMovieDB.privat = false;
                           } else{
                            personalMovieDB.privat = true;  
                           }
                        }
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB);

{ //lesson025 Get elements from page
// let box = document.getElementById("box");
// console.log(box);
// let btns = document.getElementsByTagName("button");
// console.log(btns[1]);
// let circles = document.getElementsByClassName("circle");
// console.log(circles[1]);

// let hearts = document.querySelectorAll('.heart'); 
// //в середину круглых скобок можно помещать любой сss селектор или их вложенность
// console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// });

// let oneHeart = document.querySelector('.heart'); 
// //Позволяет получить только первый подходящий элемент
// console.log(oneHeart);
};

{//}lesson026 ={ interaction with elements 
    // let box = document.getElementById("box"),
    //     btns = document.getElementsByTagName("button"),
    //     circles = document.getElementsByClassName("circle"),
    //     wrapper = document.querySelector(".wrapper"),
    //     hearts = document.querySelectorAll('.heart'),
    //     oneHeart = document.querySelector('.heart'); 
//также можно получить эти переменный внутри wrapper обращаясь сразу к нему
    //hearts = wrapper.querySelectorAll('.heart'),
   // oneHeart = wrapper.querySelector('.heart'); 
    // квери селектор будет искать .heart внутри wrapper,  wrapper должен быть получен перед этими запросами

//Свойства записываются в инлайн строку, прямо в хтмл, поэтому по приоритету 
//они будут главнее чем сss свойства
    // box.style.backgroundColor = "green";
    // box.style.width = "500px";
//Задаем множество свойств одной командой
    // let num = 400;
    // box.style.cssText = `background-color: blue; width: ${num}px`;

    // btns[1].style.borderRadius = "100%";
    // circles[0].style.backgroundColor = "red";

    // for (let i = 0; i < hearts.length; i++){
    //     hearts[i].style.backgroundColor = "blue";
    // }

//Вместо циклов в основном используем перебирающие методы
    // hearts.forEach(item=>{
    //     item.style.backgroundColor = "blue";
    // });
//Методы для создания элементов на лету
    // let div = document.createElement("div"); //елементы
    // let text = document.createTextNode("Новый текст");  // текст(ноды)
//Обычно объекту назначают класс что бы применить сразу много аттрибутов
    // div.classList.add("black");  
    // document.body.append(div); // Современный способ Прикрепляем созданный див в КОНЕЦ тега body что бы он появился на странице

// //Для присоединения к диву с классом wrapper
//     document.querySelector(".wrapper").append(div);  // можно не создавать переменную если обращаться 1 раз  
    //wrapper.append(div); // С переменной
//wrapper.appendChild(div); // УСТАРЕВШИЙ метод (разницы нету)
// // Для присоединения нужно сначала получить элемент к которому присоединять
//     //     wrapper.prepend(div); //Прикрепляем в НАЧАЛО тега
// //ПЕРЕД и ПОСЛЕ
//     hearts[1].before(div);
//     hearts[1].after(div);

    //wrapper.insertBefore(div,  hearts[1]); //СТАРЫЙ метод для бефор


// //Удаление со страницы
//     circles[1].remove();
       // wrapper.removeChild(circles[1]); //СТАРЫЙ метод
// //Замена одного элемента другим
//     hearts[2].replaceWith(circles[0]); // Сердце заменяем кругом
   //  wrapper.replaceChild(circles[0], hearts[2] ); //Старый метод

//Первый Метод Для вставки ТЕКСТА или ХМТЛ структуры
    //div.innerHTML = "<h1>Hello World</h1>";
//Второй Метод но только для текста(безопасность при вводе пользователем данных)
   // div.textContent = "Hello";
//Для вставки куска ХТМЛ кода перед или после определенных тегов
    //div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); // вставляем второй аргумент бефорбегин(перед) див
    // afterbegim - в начало(первый в середине) элемента. beforeend - в конец в середину, afterend - после элемента
};