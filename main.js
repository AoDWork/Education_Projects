"use strict";

{//Sort massive
    // const arr = [1, 14, 4, 30, 54];
    // sorted = arr.sort(CompareNum);
    // console.log(sorted);

    // function CompareNum(a, b){
    //     return a-b;
    // };
}


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
}

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
}

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
// let reklama =  document.querySelectorAll('.promo__adv img');
//        reklama.forEach(item=>{
//            item.remove();
//          });
// //2 Изменить жанр фильма, поменять "комедия" на "драма"
// let genre = document.querySelector(".promo__genre");
// genre.textContent = "Драма";
// //3 Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// //Реализовать только при помощи JS
// let bg = document.querySelector(".promo__bg");
// bg.style.backgroundImage =  "url('img/bg.jpg')";//Прописываем внутры другие кавычки что бы избежать конфликта
// //4  Список фильмов на странице сформировать на основании данных из этого JS файла.
// //Отсортировать их по алфавиту 
// let movieList =  document.querySelector(".promo__interactive-list"); // Селктор один что бы получить доступ к родителю списка и его методу
// movieList.innerHTML = ""; //Очистили список на странице
// movieDB.movies.sort(); // сортируем по алфавиту
// movieDB.movies.forEach((film, i) =>{    //a=a+1 или a+=1;
//         movieList.innerHTML += ` 
//                 <li class="promo__interactive-item">№${i+1} ${film}
//                     <div class="delete"></div>
//                 </li>
//         `; // 5 Добавить нумерацию выведенных фильмов ${i+1} 
//})
}

{//lesson028 Event listener
// //1 способ записать прямо в хтмл свойстве, комбинируем кавычки
// //<button onclick = "alert('Click')" id="btn">Нажми меня</button>

// //2 способ при этом способе мы не сможем удалить этот обработчик событий и следующий онклик заменит предыдущий
// // let btn = document.querySelector("button"); // button - тег - выбирает только первый элемент с этим тегом
// // btn.onclick = function(){
// //     alert("Knock");
// // btn.onclick = function(){
// //     alert("Second cilck");
// // };

// //3 Способ первый аргумент click - вариант события, второй аргумент коллбек функция
// let btn = document.querySelector("button");
// // btn.addEventListener("click", ()=>{
// //     alert("click");
// // });

// // btn.addEventListener("mouseenter", ()=>{ // при наведении
// //     console.log("Hover");
// // });

// // //Для получения данных об элементе с которым взаимодействуем (координаты, событие)
// // // он передается первым аргументом в коллбек функцию (название е или event или другое?)
// // btn.addEventListener("mouseenter", (e)=>{ 
// //     console.log(e);// при наведении получаем объект в консоль
// // });

// // btn.addEventListener("mouseenter", (e)=>{ 
// //     console.log(e.target);// при наведении получаем на каком объекте сработало
// //     e.target.remove(); // получаем элемент и удаляем его после наведения
// // });

// //Для удаления обработчика его нужно присвоить переменной или мы не сможем к нему обратится
// let overlay = document.querySelector(".overlay");
// // let i = 0;
// // const targetElement = (e)=>{ 
// //     console.log(e.target);
// //     i++;
// //     if(i==2){
// //         btn.removeEventListener("click", targetElement);
// //     }
// // };
// // btn.addEventListener("click", targetElement);
// //     //Удаление btn.removeEventListener("click", targetElement);

// //Всплытие событий - когда событие срабатывает сначала на вложенном элементе, а потом на родителе
// const targetOverlay = (e)=>{ 
//     console.log(e.currentTarget); // Показывает на каком елементе произошло событие СЕЙЧАС
//     console.log(e.type);
// };
// // btn.addEventListener("click", targetOverlay);
// // overlay.addEventListener("click", targetOverlay);

// //Отмена стандартного поведения
// const link = document.querySelector("a"); // получение елемента ссылки <a href="https://www.youtube.com/">https://www.youtube.com/</a>
// link.addEventListener("click", function(event){
//     event.preventDefault();     // отмена перехода по ссылке, всегда прописываем вначале 
//     console.log(event.target);  // потом то что нужно сделать
// });

// // //Применение обработчика события к множеству элементов
// const btns = document.querySelectorAll("button");
// // btns.forEach(btn =>{
// //     btn.addEventListener("click", targetOverlay);
// // });

// //Опции события (третий аргумент EventListener (capture / once/ passive/ mozSystemGroup))
// btns.forEach(btn =>{
//     btn.addEventListener("click", targetOverlay, {once:true});
// });
}

{//029 Navigation in DOM, Data attributes, forof преимущества
//console.log(document.body); //- получаем боди
//console.log(document.documentElement); //- получаем ХТМЛ
//console.log(document.body.childNodes); //- псевдомассив узлов(нод) боди - 
//аналога с Элементами нету иногда его создают вручную перебором фороф потому что в нем есть брейк и континье
// for(let node of document.body.childNodes){
//     if(node.nodeName == "#text"){ // пропускаем узлы содержащие в названии #text
//         continue;              
//     }
//     console.log(node);
// }

// console.log(document.body.firstChild); //первая Нода
//console.log(document.body.firstElementChild); // первый Элемент
// console.log(document.body.lastChild);// последняя Нода
// console.log(document.querySelector("#current").parentNode); // получаем ноду по классу и обращаемя к его родителю
// console.log(document.querySelector("#current").parentNode);// получаем ноду родителя еще на уровень выше
//console.log(document.querySelector("#current").parentElement); // получаем ЭЛЕМЕНТ

//!!! НОДА - узел, отличается от получения элемента тем что может быть просто перенос на новыю строку, а не элемент
//data элементы <li data-current="3">3</li> используем вместо id
// console.log(document.querySelector("[data-current='3']"));//получить элем по дата аттрибуту !комбинация кавычек
// console.log(document.querySelector("[data-current='3']").nextSibling); //Следующий нода 
// console.log(document.querySelector("[data-current='3']").previousSibling); //Предыдущая нода
// console.log(document.querySelector("[data-current='3']").nextElementSibling); // Следующий элемент
// console.log(document.querySelector("[data-current='3']").nextSibling);
}

{//30 Practice use eventListeners
    'use strict';

document.addEventListener('DOMContentLoaded', () =>{ // - скрипт начнет работу при полной загрузке ДОМ дерева

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
        //    reklama.forEach(item=>{
        //        item.remove();
        //      });
    //2 Изменить жанр фильма, поменять "комедия" на "драма"
    let genre = document.querySelector(".promo__genre");
    // genre.textContent = "Драма";
    //3 Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    //Реализовать только при помощи JS
    let bg = document.querySelector(".promo__bg");
    // bg.style.backgroundImage =  "url('img/bg.jpg')";//Прописываем внутры другие кавычки что бы избежать конфликта
    //4  Список фильмов на странице сформировать на основании данных из этого JS файла.
    //Отсортировать их по алфавиту 
    let movieList =  document.querySelector(".promo__interactive-list"); // Селктор один что бы получить доступ к родителю списка и его методу
    // movieList.innerHTML = ""; //Очистили список на странице
    // movieDB.movies.sort(); // сортируем по алфавиту
    // movieDB.movies.forEach((film, i) =>{    //a=a+1 или a+=1;
    //         movieList.innerHTML += ` 
    //                 <li class="promo__interactive-item">№${i+1} ${film}
    //                     <div class="delete"></div>
    //                 </li>
    //         `; // 5 Добавить нумерацию выведенных фильмов ${i+1} 
    // });

//30 Practice
// После введения текста в форму и нажатия кнопки 'Подтвердить'- добавляется новый фильм в список 
//без перезагрузки страницы. Новый фильм должен добавиться в movieDB.movies. Для получения значения из
// инпут  обращаемся  input.value.
let addForm = document.querySelector("form.add"); //<form class="add">
let addInput = addForm.querySelector(".adding__input"); // в теге form с классом add ищем класс <input class="adding__input"
let checkbox = addForm.querySelector("[type=checkbox]");  // ищем по аттрибуту <input type="checkbox">

addForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    let newMovie = addInput.value;
    let favorite = checkbox.checked; // обращаемся к чекбоксу что б он вернул тру или фолсе галочка отмечена или нет
    
    if(newMovie) {  // Проверка на пустую строку
       if(newMovie.length > 21){
        newMovie = `${newMovie.substring(0, 22)}...`; //проверяем на длинну символом и больше 21 знака добавляем троеточие
       }
       if(favorite){
           console.log("Добавляем любимый фильм");
       }
        movieDB.movies.push(newMovie);
        sortArr(movieDB.movies); //заново сортируем список
        
        createMovieList(movieDB.movies, movieList);
    }
  
    event.target.reset(); // удаляем текст из формы (addForm заменили на event.target разницы нету)
});

//создаем функцию для вывода списка и добавляем аргументы что бы она вызывалась только при нажатии
function createMovieList(films, parent){
    parent.innerHTML = ""; //Очистили список на странице
    sortArr(films);

    films.forEach((film, i) =>{    //a=a+1 или a+=1;
        parent.innerHTML += ` 
                    <li class="promo__interactive-item">№${i+1} ${film}
                        <div class="delete"></div>
                    </li>
            `; 
    });
    //3 Удаляем фильм при нажатии на кнопку корзинки которые создаются вместе с элементом фильма 
    document.querySelectorAll(".delete").forEach((btn, i)=>{ //находим кнопки удаления через класс <div  class="delete"
        btn.addEventListener("click", ()=> {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1); //удаляем 1 элемент из массива под номером i
            createMovieList(films, parent); //заново перестраиваем список вызывая функцию внутри себя (Рекурсия)
        });
    });
}  

let deleteAdv = (arr)=>{
arr.forEach(item=>{
    item.remove();
  });
};

let makeChanges = () =>{
    genre.textContent = "Драма";
    bg.style.backgroundImage =  "url('img/bg.jpg')";
};

let sortArr = (arr) =>{
    arr.sort();
};

createMovieList(movieDB.movies, movieList); //вызываем первый раз для построения списка
makeChanges();
deleteAdv(reklama);

});
}

{//032 Async, defer, dynamic scripts

//<script defer src="js/main.js"></script>
//defer - этот аттрибут сообщает браузеру что он должен продолжать обрабатывать страницу
// и загружать скрипт в фоновом режиме, а затем запустить скрипт когда загрузка DOM будет выполнена
//скрипты с defer никогда не блокируют загрузку страници. Скрипты с defer выполняются последовательно
//поэтому есть недостаток если впереди маленького скрипта стоит большой, маленький будет ждать выполнения большого

//<script async src="js/main.js"></script>
// async - запускается как только он будет загружен не ждет полного построения DOM модели
//используется для подвязки скриптов которые не зависят от DOM или другого функционала сайта(Метрики и счетчики)

//Динамически загружаемый скрипт ведет себя как async(выролняется сразу), пример формирования скрипта в другом скрипте
// const script = document.createElement("script"); //создаем елемент
// script.src = "js/test.js";                       //задаем атриббут сорс
// document.body.append(script);             //присоединяем к боди(помещается в конец) (замасчиваем на страницу) и тут же он выполняется

// // можно отменить асинхронное поведение скрипта
// function loadScript(src){
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }
// loadScript("js/test.js"); //будут выполнятся последовательно
// loadScript("js/some.js");
}
//---------------------------------------------------------------------------------------------
{//002 Classlist м делегирование событий
    const btns = document.querySelectorAll("button");
//console.log(btns[0].classList.length); // консоль показала 2 класса <button class="blue some"></button>
// console.log(btns[0].classList.item(0));   // обращаемся к первому классу 'blue', () - скобки нужны
// console.log(btns[0].classList.item(1));     // "some" - второй класс
// console.log(btns[0].classList.add("red", "green")); //<button class="blue some red"></button> добавление
// console.log(btns[0].classList.remove("blue")); //удаление класса, можно добалять и удалять несколько сразу
// console.log(btns[0].classList.toggle("blue")); // если класс есть на элем. его удалит, если нету добавит

// //для использования класса в условии применяется
// if (btns[0].classList.contains('red')){ //проверяем содержит ли элемент класс red 
//     console.log("red");
// }

//
// btns[0].addEventListener("click", ()=>{
//     // if(!btns[1].classList.contains("red")){ //проверяем отсутствие у второй кнопки класса red
//     //     btns[1].classList.add("red");       // добавим класс
//     // } else{
//     //     btns[1].classList.remove("red");    //если класс есть то удалим
//     // }
// //можно использовать toggle, но иногда нужно вручную проверить на класс
// btns[1].classList.toggle("red");
// });

//устаревший метод className выводит классы одной строкой и потом нужно с этой строкой
//взаимодействовать, classList выводит псевдомассивом
//console.log(btns[0].className);

// Делегирование событий - используется для назначения одного события на несколько элементов
//даже если они созданы без нас(динамически). Назначаем обр. события на родителя элементов а потом
//проверяем на что был клик и сравниваем с заданными параметрами
const wrapper = document.querySelector(".btn-block"); //родитель кнопок <div id="first" class="btn-block">

wrapper.addEventListener('click', function(event){
    if(event.target && event.target.tagName == "BUTTON"){//проверяем на существование тега и на равенство его свойства строке "BUTTON"
      //сравнивать можно с nodeName и classList        if(event.target && event.target.classList.contains("blue"))   
      //продвинутое сравнение   if(event.target && event.target.matches("button.red"))     совпадение тега баттон у которого есть класс ред                               
         console.log("Hello!");
    }
  });

  const btn = document.createElement('button'); //создаем элемент
  btn.classList.add('red'); // добавляем ей класс ред
  wrapper.append(btn);      //прикрепляем в элемент wrapper
}

{//003 Создание Табов (вкладок)
    "use strict";
    //Задание - при нажатии на определенную кнопку выводить изображение и описание для нее
    window.addEventListener("DOMContentLoaded", ()=>{
        //получаем переменные
        const tabs = document.querySelectorAll(".tabheader__item"), //<div class="tabheader__item">Премиум</div> кнопки
                    tabsContent = document.querySelectorAll(".tabcontent"),// <div class="tabcontent">
                                                                            // <img src="img/tabs/vegy.jpg" alt="vegy">
                                                                            // <div class="tabcontent__descr">
                                                                                    //Меню "Фитнес" - ...
                                                                            // </div>
            // родительский эл. для назначение обр. событий кнопкам динамически
                     tabsParent = document.querySelector(".tabheader__items");//<div class="tabheader__item tabheader__item_active">Фитнес</div>
    
        //Скрываем ненужные табы
        function hideTabContent (){
            tabsContent.forEach(item =>{    //перебираем элементы и назначаем всем стиль
                //item.style.display = "none";
                item.classList.add("hide");     // Делаем через классы в css теперь две строчки
                item.classList.remove("show", "fade");
            });
            tabs.forEach(item =>{
                item.classList.remove("tabheader__item_active");//удаляем подсветку активности кнопок
            });
        }
         
        function showTabContent(i = 0){     // i = 0 - если вызвать функцию без аргумента то 0 юудет подставлятся по дефолту
            //tabsContent[i].style.display ="block";
            tabsContent[i].classList.add("show", "fade");   // Делаем через классы в css теперь две строчки
            tabsContent[i].classList.remove("hide");
            tabs[i].classList.add("tabheader__item_active");
        }
    
        hideTabContent(); //скрываем все табы
        showTabContent(); //показываем 1 таб по дефолту обычно первый под номером 0
    
        //Присваиваем обработчик события для кнопок
        tabsParent.addEventListener("click", (event)=>{
            const target = event.target; //переменная для уменьшения писанины если нужно часто обращатся к евент
    
            if(target&&target.classList.contains("tabheader__item")){
                tabs.forEach((item, i)=>{
                    if(target == item){
                        hideTabContent(); 
                        showTabContent(i);
                    }
                });
            }
        });
        //Добавили в css такой код .show{display:block}.hide{display:none}
        //.fade{animation-name: fade;animation-duration: 1.5s;}@keyframes fade{from{opacity: 0.1;}to{opacity: 1;}}
    
    });
}

{//004 Время выполнения скриптов, setTimeout & setInterval
    "use strict";
    // const timerId = setTimeout(function(){
    //     console.log("Hello");
    // }, 1000);
    
    // const timerId2 = setTimeout(function(text){
    //     console.log(text);
    // }, 2000, "Hello2");
    
    // const timerId3 = setTimeout(logger, 3000);
    // function logger(){
    //     console.log("text");
    // }
    
    // const btn = document.querySelector(".btn"); //<button class="btn">Animation</button>
    // let timerId4;
    // let i = 0;
    
    // btn.addEventListener("click", ()=>{
    //     //clearInterval()
    //     timerId4 = setInterval(logger, 500); //Присваиваем значение сетинтервала таймеру через 2 секунды
    // });
    // //clearInterval(timerId4) не сработает потому что значение ему присвоится через 2 секунды. А текущее undefined
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
    let timerId4;
    let i = 0;
    
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
}

{//Date
    "use strict";

    //const now = new Date();
    //const now = new Date("2020.1.8");
    //new Date.parse("2020.1.8"); //работает идентично const now = new Date("2020.1.8");
    //const now = new Date(2020, 1, 8, 18); //18 часов, месяц и день указываем без 0. 
    //Часы могут показывать по гринвичу, а месяцы считаются с 0, 0-январь
    //const now = new Date(0);//Дата (Тайм стемп) хранится в милисекундах. отсчет с начала 1970 года
    
    const now = new Date();
    // console.log(now.getFullYear()); //2022 год
    // console.log(now.getMonth()); // месяц считаются с 0, 0-январь
    // console.log(now.getDate()); //число
    // console.log(now.getHours());//часы
    // console.log(now.getMinutes());
    // console.log(now.getDay()); // номер дня в неделе, воскресение - 0, понедельник - 1
    // //Все значения по местному часовому поясу
    // console.log(now.getUTCHours()); // часовой пояс +0
    
    // console.log(now.getTimezoneOffset()); //разница в минутах между основным час.пояс. и местным
    // console.log(now.getTime()); //количество милисекунд с начала 1970 года
    
    //Для установки даты используем теже методы но с set
    //console.log(now.setHours(18)); // устанавливаем это время для переменной
    //console.log(now.setHours(40));//автоисправление
    //console.log(now);
    
    //Для измерения промежутков времени используем бенчмарк
    let start = new Date();
    
    for (let i = 0; i < 100000; i++){
        let some = i ** 3; // i возводим в степень 3
    }
    
    let end = new Date();
    alert(`Цикл выполнился за ${end - start} миллисекунд`);
}