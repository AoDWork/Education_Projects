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
//  правду. Тоесть цикл будет выполняться(задавать вопрос пользователю пока он будет вводить невалидные данные в поле ввода) 
// до тех пор пока уловия не будут ложными - тоесть введенные значения будут валидными для условия проверки но невалидные 
// для нас.  А когда значения  будут невалидные для условия, но правильными для нас(числовой тип) тогда цикл остановится.

let numberOfFilms;

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

//Сделаем обвертку ф-цией этого блока для того что бы вызывать его только по требованию. Далее сделаем для нее вызов.
function rememberMyFilms(){
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
}

// rememberMyFilms();

// Эту часть кода тоже оборачиваем в ф-ю. *Таким образом у нас появились ф-и к которым можно обратиться и вызвать
// их в нужное время или по событию.
function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

// Мое решение
// function showMyDB(){
//     if (personalMovieDB.privat){
//         console.log('This is a privat object.');
//     } else {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

// Сделаем передачу данных из personalMovieDB.privat в параметр hidden. Тогда условие звучит так, если база
// НЕ скрыта(!hidden - нот тру) показываем. false передается в хидден и через ! становится тру и показывается
// база данных, а если в privat будет тру то оно превратится в фолс и покажется.
function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
        } else {
        console.log('This is a privat object.');
    }
}
showMyDB(personalMovieDB.privat);


//Мое решение
// function writeYourGenres(){
//     for(let i = 1; i < 4; i++){
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
//     }
// }
// writeYourGenres();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        // Первоначальный код через переменную
        // const genre = prompt(`Ваш любимый жанр под номером ${i}?`);
        // personalMovieDB.genres[i - 1] = genre; 

        //personalMovieDB.genres.push(genre);  - так тоже работало с переменной

        //Уменьшим код такой записью - код работает быстрее потому что не нужно создавать переменную
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}
writeYourGenres();

console.log(personalMovieDB.genres);
console.log(personalMovieDB);
