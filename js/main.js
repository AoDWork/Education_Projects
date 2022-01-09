"use strict";

{//Sort massive
    const arr = [1, 14, 4, 30, 54];
    sorted = arr.sort(CompareNum);
    console.log(sorted);

    function CompareNum(a, b){
        return a-b;
    };
};


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

{//lesson027 Practise with elements
    const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1 Удалить все рекламные блоки со страницы (правая часть сайта)
let reklama =  document.querySelectorAll('.promo__adv img');
       reklama.forEach(item=>{
           item.remove();
         });
//2 Изменить жанр фильма, поменять "комедия" на "драма"
let genre = document.querySelector(".promo__genre");
genre.textContent = "Драма";
//3 Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
let bg = document.querySelector(".promo__bg");
bg.style.backgroundImage =  "url('img/bg.jpg')";//Прописываем внутры другие кавычки что бы избежать конфликта
//4  Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 
let movieList =  document.querySelector(".promo__interactive-list"); // Селктор один что бы получить доступ к родителю списка и его методу
movieList.innerHTML = ""; //Очистили список на странице
movieDB.movies.sort(); // сортируем по алфавиту
movieDB.movies.forEach((film, i) =>{    //a=a+1 или a+=1;
        movieList.innerHTML += ` 
                <li class="promo__interactive-item">№${i+1} ${film}
                    <div class="delete"></div>
                </li>
        `; // 5 Добавить нумерацию выведенных фильмов ${i+1} 
})};

{//lesson028 Event listener
//1 способ записать прямо в хтмл свойстве, комбинируем кавычки
//<button onclick = "alert('Click')" id="btn">Нажми меня</button>

//2 способ при этом способе мы не сможем удалить этот обработчик событий и следующий онклик заменит предыдущий
// let btn = document.querySelector("button"); // button - тег - выбирает только первый элемент с этим тегом
// btn.onclick = function(){
//     alert("Knock");
// btn.onclick = function(){
//     alert("Second cilck");
// };

//3 Способ первый аргумент click - вариант события, второй аргумент коллбек функция
let btn = document.querySelector("button");
// btn.addEventListener("click", ()=>{
//     alert("click");
// });

// btn.addEventListener("mouseenter", ()=>{ // при наведении
//     console.log("Hover");
// });

// //Для получения данных об элементе с которым взаимодействуем (координаты, событие)
// // он передается первым аргументом в коллбек функцию (название е или event или другое?)
// btn.addEventListener("mouseenter", (e)=>{ 
//     console.log(e);// при наведении получаем объект в консоль
// });

// btn.addEventListener("mouseenter", (e)=>{ 
//     console.log(e.target);// при наведении получаем на каком объекте сработало
//     e.target.remove(); // получаем элемент и удаляем его после наведения
// });

//Для удаления обработчика его нужно присвоить переменной или мы не сможем к нему обратится
let overlay = document.querySelector(".overlay");
// let i = 0;
// const targetElement = (e)=>{ 
//     console.log(e.target);
//     i++;
//     if(i==2){
//         btn.removeEventListener("click", targetElement);
//     }
// };
// btn.addEventListener("click", targetElement);
//     //Удаление btn.removeEventListener("click", targetElement);

//Всплытие событий - когда событие срабатывает сначала на вложенном элементе, а потом на родителе
const targetOverlay = (e)=>{ 
    console.log(e.currentTarget); // Показывает на каком елементе произошло событие СЕЙЧАС
    console.log(e.type);
};
// btn.addEventListener("click", targetOverlay);
// overlay.addEventListener("click", targetOverlay);

//Отмена стандартного поведения
const link = document.querySelector("a"); // получение елемента ссылки <a href="https://www.youtube.com/">https://www.youtube.com/</a>
link.addEventListener("click", function(event){
    event.preventDefault();     // отмена перехода по ссылке, всегда прописываем вначале 
    console.log(event.target);  // потом то что нужно сделать
});

// //Применение обработчика события к множеству элементов
const btns = document.querySelectorAll("button");
// btns.forEach(btn =>{
//     btn.addEventListener("click", targetOverlay);
// });

//Опции события (третий аргумент EventListener (capture / once/ passive/ mozSystemGroup))
btns.forEach(btn =>{
    btn.addEventListener("click", targetOverlay, {once:true});
});
};