"use strict";
// При переносе ф-и start в объект нужда в переменной numberOfFilms отпадает. Мы установим для свойства count значение равное 0.
// а в ф-и вместо переменной numberOfFilms пропишем путь к count куда и будет ложиться результат personalMovieDB.count

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const movieName = prompt(`Один из последних просмотренных фильмов? ${i}`, ''),
                  movieRank = prompt('На сколько его оцените?', '');
            
            if(movieName != null && movieRank != null && movieName != '' && movieRank != '' && movieName.length < 50) {
                personalMovieDB.movies[movieName] = movieRank;
                console.log('Done');
            }else{
                console.log('Enter valid data');
                i--;
            }
        }
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        }else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden){
        if (!hidden){
            console.log(personalMovieDB);
            } else {
            console.log('This is a privat object.');
        }
    },
    //Так как цикл у нас уже есть, нам осталось добавить условие. Добавим переменную для хранения ответа genre.
    writeYourGenres: function (){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`);
                        
            if (genre == '' || genre == null){
                console.log("Вы ввели некорректные данные или не ввыели их вовсе.")
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            };

            // Моя корявая реализация.
            // if (i == 3) {
            //     personalMovieDB.genres.forEach(function(item, i){
            //         console.log(`Любимый жанр #${i+1} - это ${item}`)
            //     });

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр №${i + 1} - это ${item}`);
            });
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true ;
        };
    }

};


// Реализуем метод writeYourGenres с использованием другого подхода. Изменим вопрос, теперь ожидаем строку с ответами. Значит вопрос
    // будет задан 1 раз, и нам не нужно 3 итерации - изменим i <= 3 на i < 2. И тперь передаем в genres - массив полученный из 
    //строки ответа пользователя через метод split с разделителем (", "). Потом отсортируем массив по алфавиту.
    //* При сортировке массива, отдается предпочтение словам начинающимся с большой буквы, тоесть Боб будет первее чем аня, поэтому
    //  при сортировке стоит приводить все слова к одному регистру, допишем к полученному ответу .toLowerCase();
    
function writeYourGenres (){
    for(let i = 1; i < 2; i++){
        let genres = prompt(`Введите ваши любимые жанры через запятую.`).toLowerCase();
        
        if (genres == '' || genres == null){
            console.log("Вы ввели некорректные данные или не ввыели их вовсе.")
            i--;
        } else {
            personalMovieDB.genres = genres.split(", ");
            personalMovieDB.genres.sort();
        };
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    }
};

writeYourGenres();
console.log(personalMovieDB);