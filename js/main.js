"use strict";
let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == ""||numberOfFilms ==null || isNaN(numberOfFilms ) ){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat:false
};

function rememberMyFilms(){
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
}
rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        document.write("Просмотрено мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        document.write("Вы классический зритель");
    }else if(personalMovieDB.count >= 30){
        document.write("Вы киноман");
    }else{
        document.write("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}
writeYourGenres();