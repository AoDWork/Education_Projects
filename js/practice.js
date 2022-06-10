"use strict";

// В ф-ю start поместим инициализирующий вопрос с которого начинается работа программы const numberOfFilms = +prompt('С...
// также добавим проверку что бы пользователь не мог отменить вопрос, ввести пустую строку или нечисло.
// Что бы он вводил число мы ограничивались плюсом перед +prompt, но теперь этого мало. Проверка будет на этапе выполнения,
// когда он нажал клавишу ОК. *Для проверки на этапе ввода в инпут нужно использовать РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ которые изучим
// позднее. 

// При переносе numberOfFilms в ф-ю она станет локальной и мы не сможем записать ее в personalMovieDB напрямую(можно через
// return сделать ее вывод), поэтому мы объявим переменную numberOfFilms глобально, а само присваивание и вопрос пренесем в
// ф-ю и сменим объявление numberOfFilms с const на let чтобы можно было ее изменять.

//Проверку на правильность ввода мы делали через цикл for и использовали проверку правдивости, но мы можем использовать и while, 
// пойдем от обратного чтобы увидеть и другие логические конструкции. Тут мы будем проверять неправдивые(неправильные варианты)
// если это так то вопрос повторится, а если все хорошо то цикл будет закончен. Проверям numberOfFilms - пустая строка или
// (нажимает кнопку ОТМЕНА)null или isNaN(numberOfFilms) - метод проверяет аргумент и если внутри не число то он возвращает
//  правду. Тоесть цикл будет выполняться до тех пор пока уловия не будут ложными - тоесть введенные значения будут правильными для
// условия проверки но неправильными для нас.
// А когда значения  будут неправильными для условия, но правильными для нас(числовой тип) тогда цикл остановится.
const numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}else if(personalMovieDB.count >= 30) {
    console.log("Вы киноман");
}else {
    console.log("Произошла ошибка");
}

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


console.log(personalMovieDB.movies);
console.log(personalMovieDB);
