"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movieName = prompt('Один из последних просмотренных фильмов?', ''),
      movieRank = prompt('На сколько его оцените?', ''),   
      movieName2 = prompt('Один из последних просмотренных фильмов?', ''),
      movieRank2 = prompt('На сколько его оцените?', '');

personalMovieDB.movies[movieName] = movieRank;
personalMovieDB.movies[movieName2] = movieRank2;


console.log(personalMovieDB.movies);
console.log(typeof(personalMovieDB.movies));
