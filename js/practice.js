"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//При сравнении нажатий на кнопку отмена -null и кнопки ок без данных(пустой строки) - '', они превращаются в 0 и засчитывается
//  первый ответ, а не ошибка, в последующем мы это исправим, такие случаи нужно держать в голове и уметь с ними работать.
if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}else if(personalMovieDB.count >= 30) {
    console.log("Вы киноман");
}else {
    console.log("Произошла ошибка");
}

// for (let i = 0; i < 2; i++) {
//     const movieName = prompt(`Один из последних просмотренных фильмов? ${i}`, ''),
//           movieRank = prompt('На сколько его оцените?', '');
//     //первая и вторая переменная не равна null -  который получаем при нажатии кнопки отмены и не равны пустой строке '' 
//     // и первая переменная не длинее 50 символов. Что бы не было таких длинных цепочек можно называеть переменные которые не 
//     // используются дальше в коде(технические) короткими названиями a и b - например.
//     if(movieName != null && movieRank != null && movieName != '' && movieRank != '' && movieName.length < 50) {
//         personalMovieDB.movies[movieName] = movieRank;
//         console.log('Done');
//     }else{
//         console.log('Enter valid data');
//         i--;    // если введены неправильные данные то цикл вернется на 1 итерацию назад уменьша i на единицу и вопрос будет 
//                 // задан повторно
//     }
// }

let
while ()


console.log(personalMovieDB.movies);
console.log(personalMovieDB);
