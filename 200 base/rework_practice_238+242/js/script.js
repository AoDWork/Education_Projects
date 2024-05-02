{/* Мое решение 238 rework
const reklamaBlock = document.querySelector('.promo__adv')
    reklamaBlock.innerHTML = '';

    const genre = document.querySelector('.promo__genre')
    genre.textContent = 'Драма'

    const bg = document.querySelector('.promo__bg')
    bg.style.cssText = `background: url('./img/bg.jpg') center top no-repeat;`

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

*/}
'use strict';

{/* Мое решение 242 rework
    document.addEventListener('DOMContentLoaded', () =>{
    const reklamaBlock = document.querySelector('.promo__adv')
    const genre = document.querySelector('.promo__genre')
    const bg = document.querySelector('.promo__bg')
    const filmListparent = document.querySelector('.promo__interactive-list')
    const submitBtn = document.querySelector('button')
    const userInput = document.querySelector('.adding__input')
    const checkbox = document.querySelector('.checkbox')
    let deleteBtns = document.querySelectorAll('.delete')


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

    reklamaBlock.innerHTML = ''
    genre.textContent = 'Драма'
    bg.style.backgroundImage = `url('./img/bg.jpg')`

    function deleteBtnsEvents() {
        deleteBtns = document.querySelectorAll('.delete')
        deleteBtns.forEach((el) => {
            el.addEventListener('click', (e) => {
                let elementText = e.target.parentElement.textContent.slice(2).trim()

                let filterMovies = movieDB.movies.filter((el, ind, arr) => {
                    return (el != elementText)
                })

                movieDB.movies = filterMovies

                sortAndView()
            })
        })

    }

    function sortAndView() {
        filmListparent.innerHTML = ''
        movieDB.movies.sort()
        
        movieDB.movies.forEach((movie, ind) => {
            filmListparent.innerHTML +=  `<li class="promo__interactive-item">#${ind+1} ${movie}
            <div class="delete"></div>
        </li>`
        })
        deleteBtnsEvents()
    }

    submitBtn.addEventListener('click', (e)=> {
        e.preventDefault()
        let value = userInput.value
        if(value.length >= 15) {
            value = value.slice(0, 16) + '...'
        }
        movieDB.movies.push(value)
        sortAndView()
        if(checkbox.checked){
            console.log("Добавлен любимый фильм")
        }
        
    })

    sortAndView()
})
*/}

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});