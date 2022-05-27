//"use strict";
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




personalMovieDB.count = numberOfFilms;
personalMovieDB.movies =  [movieName,movieRank];








console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
console.log(typeof(personalMovieDB.movies));
