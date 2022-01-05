"use strict";
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat:false
};

let nameOfFilm1 = prompt("Последний просмотренный фильм?", "");
let rate1 = prompt("Оцените этот фильм.", "");
let nameOfFilm2 = prompt("Последний просмотренный фильм?", "");
let rate2 = prompt("Оцените этот фильм.", "");
personalMovieDB.movies[nameOfFilm1] = rate1;
personalMovieDB.movies[nameOfFilm2] = rate2;
console.log(personalMovieDB);