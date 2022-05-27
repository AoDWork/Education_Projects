"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movieName = prompt('Один из последних просмотренных фильмов?', '');
let movieRank = +prompt('На сколько его оцените?', '');

let movieName2 = prompt('Один из последних просмотренных фильмов?', '');
let movieRank2 = +prompt('На сколько его оцените?', '');

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies[movieName] = movieRank;
personalMovieDB.movies[movieName2] = movieRank2;


console.log(personalMovieDB.movies);
console.log(typeof(personalMovieDB.movies));
//document.write(`Фильмов просмотрено ${personalMovieDB.count}`);
document.write(personalMovieDB.movies);
