'use strict';
const reklamaBlock = document.querySelector('.promo__adv')
reklamaBlock.innerHTML = '';

const genre = document.querySelector('.promo__genre')
genre.textContent = 'Драма'

const bg = document.querySelector('.promo__bg')
// bg.style.cssText = `background: url('./img/bg.jpg') center top no-repeat;`
bg.style.backgroundImage = `url('./img/bg.jpg')`

const movieDB = {
    movies: [
        "Логан",
        'Алиса',
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const filmListparent = document.querySelector('.promo__interactive-list')
filmListparent.innerHTML = ''

movieDB.movies.sort();
movieDB.movies.forEach((movie, ind) => {
    filmListparent.innerHTML +=  `<li class="promo__interactive-item">#${ind+1} ${movie}
    <div class="delete"></div>
</li>`
})
