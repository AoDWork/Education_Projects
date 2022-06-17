{/* Мое решение
    'use strict';
//  Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
    let delAdv = document.querySelector('.promo__adv');
    delAdv.remove();

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
    let genre = document.querySelector('.promo__genre');
    genre.textContent = "Драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
    let bg = document.querySelector('.promo__bg');
    bg.style.cssText = 'background:url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 
// 5) Добавить нумерацию выведенных фильмов
    

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Алешки",
            'Алексеи',
            'Акведуки'
        ]
    };
    let sortDB = movieDB.movies.sort();
    console.log(sortDB);

    
    let listFilms = document.querySelectorAll(".promo__interactive-item");
    console.log(listFilms.length);

    for (let i = 0; i < listFilms.length; i++ ){
        listFilms[i].innerHTML = `№${i + 1} ${sortDB[i]}`;
    }
*/}
'use strict';
const adv =  document.querySelectorAll('.promo__adv img');
        
        adv.forEach(item => {
            item.remove();
        });
        // Обычная ф-я вместо стрелочной    adv.forEach( function (item){


    //2 находим эл. на странице, получаем его в переменную и изменяем "внутренности". В 3м задании нужно поменять фоновую картинку
        // у элемента в котором находится нужный нам сейчас элемент. Поэтому можем сразу в переменную взять родительский эл., а
        // потом в нем найти элемента для этого задания. Для простого изменения текста используем метод textContent.
        const poster = document.querySelector(".promo__bg"),
              genre = poster.querySelector(".promo__genre");

        genre.textContent = "Драма";


    //3 Элемент получен. Поэтому обращаемся к нему. Путь к картинке прописываем относительно файла index.html
        poster.style.backgroundImage = 'url("img/bg.jpg")';
        
        
        let movieList =  document.querySelector(".promo__interactive-list"); 
        const inner = movieList.innerHTML;
        console.log(inner);
