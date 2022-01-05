"use strict";
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat:false
};

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
console.log(personalMovieDB);

if(personalMovieDB.count < 10){
    document.write("Просмотрено мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    document.write("Вы классический зритель");
}else if(personalMovieDB.count >= 30){
    document.write("Вы киноман");
}else{
    document.write("Произошла ошибка");
}