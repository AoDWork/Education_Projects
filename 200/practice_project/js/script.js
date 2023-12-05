'use strict';

        // Некоторые страницы плохо оптимизированы, и так как построение ДОМ дерева идет сверху вниз и там будут тяжелый картинки
        // например, элементы могут долго появляться на странице, а наш код уже может обращаться к странице для получения эл. 
        // которых еще нету. Чтобы наш код не начал работать раньше чем страница загрузиться нужно его обернуть в обработчик события
        // с callback функцией которая начнет работать ТОЛЬКО при ПОЛНОМ ПОСТРОЕНИИ ДОМ дерева. Для этого у нас есть 2 
        // отслеживаемых события: 1) load - когда страница ПОЛНОСТБЮ загрузилась со всеми скриптами и картинками; 
        // 2) DOMContentLoaded - при этом мы ждем не полной загрузки всех элементов на странице, а только построение ДОМ структуры,
        // то есть когда наше дерево тегов (DOM) сформируется полноценно для нормальной работы с ним, тогда наши скрипты начинают
        // работать а картинки и остальное еще подгружаются.


        document.addEventListener('DOMContentLoaded', () =>{ // - скрипт начнет работу при полной загрузке ДОМ дерева

            const movieDB = {
                movies: [
                    "Логан",
                    "Лига справедливости",
                    "Ла-ла лэнд",
                    "Одержимость",
                    "Скотт Пилигрим против..."
                ]
            };
            
            const adv =  document.querySelectorAll('.promo__adv img');  // Удаление рекламы
            const bg = document.querySelector(".promo__bg"),     
            genre = bg.querySelector(".promo__genre");
            let movieList =  document.querySelector(".promo__interactive-list"); // Доступ к родителю списка


        //30
        // 1) На сайте при нажатии на кнопку "Подтвердить" идет отправка формы на серверер и стандартное действие при этом - 
            // перезагрузка  страницы. Можно решить парой способов 1) когда отправляется форма - добавляем новые данные в массив и
            // после этого заново строим список фильмов; 2) делаем это паралельно добавляем новый эл. в верстку и новый эл. в
            // массив. На этом этапе разныци в быстродействии не будет, но второй способ тяжее реализовать, поэтому разберем
            // только первый способ.


            // Получим эл. с которыми будем работать.
            const addForm = document.querySelector("form.add"); //<form class="add"> - форма с классом add
            const addInput = addForm.querySelector(".adding__input"); // в теге form ищем класс <input class="adding__input"
            const checkbox = addForm.querySelector("[type=checkbox]");  // ищем по аттрибуту <input type="checkbox">


            // Для отслеживания отправки формы используем обработчик событий по событию submit
            addForm.addEventListener('submit', (event)=>{
                event.preventDefault();         // отменяем стандартное поведение формы

                let newFilm = addInput.value;   // берем введенный пользователем текст
                const favorite = checkbox.checked; // обращаемся к чекбоксу по свойству checked, оно вернет true или false при 
                                                 // изменении состояния галочки(onchange)
                
                if(newFilm) {  // Проверка на пустую строку(если ничего не ввели - false)
                    if(newFilm.length > 21){
                        newFilm = `${newFilm.substring(0, 22)}...`; //проверяем на длинну символов и добавляем троеточие
                    }
                    if(favorite){
                        console.log("Добавляем любимый фильм");
                    }
                    movieDB.movies.push(newFilm);  // пушим фильм в массив
                    sortArr(movieDB.movies);        // заново сортируем список
                        
                    createMovieList(movieDB.movies, movieList); // заново строим список фильмов на странице
                }
            
                event.target.reset(); // *! удаляем текст из формы (addForm заменили на event.target разницы нету)
            });


            // Создаем функцию для вывода списка чтобы ее можно было вызвать при нажатии и добавляем аргументы чтобы отойти от 
                // переменных а ф-я узнавала с чем она работает только в момент вызова.
                function createMovieList(films, parent){
                    parent.innerHTML = ""; //Очистили список на странице
                    sortArr(films); // Сортирует и при загрузке страницы потому что createMovieList вызывается при загрузке

                    films.forEach((film, i) =>{    //a=a+1 или a+=1;
                        parent.innerHTML += ` 
                                    <li class="promo__interactive-item">№${i+1} ${film}
                                        <div class="delete"></div>
                                    </li>
                            `; 
                    });

            // Корзинка на которую нужно нажать чтобы удалился фильм создается динамически с помощью CSS. В верстку в браузере
                // к каждому фильму элементу с фильмом после построения списка фильмов добавляется див с классом delete
                // <div  class="delete" - это и есть та самая корзинка. Чтобы корзинка соответствовала тому фильму на против
                // которого расположена нам нужно брать список(массив) корзинок после построения нового списка и вешать на
                // каждую обработчик события для удаления родителя корзинки + к этому нужно будет удалить фильм из базы
                // данных и перестроить список.
                document.querySelectorAll(".delete").forEach((btn, i)=>{ //находим кнопки удаления через класс <div  class="delete"
                    btn.addEventListener("click", ()=> {
                        btn.parentElement.remove();
                        movieDB.movies.splice(i, 1); //удаляем 1 элемент под номером i из массива(базы данных) 
                        createMovieList(films, parent); //заново перестраиваем список чтобы перестроить нумерацию,
                                                        // вызывая функцию внутри себя (Рекурсия)
                    });
                });
            }  


            // Оборачиваем удаление рекламы в ф-ю что бы ее вызвать и добавляем параметры что бы отвязаться от переменных.
                const deleteAdv = (arr)=>{
                    arr.forEach(item=>{
                        item.remove();
                    });
                };


            // Оборачиваем два действия в ф-ю
                let makeChanges = () =>{
                    genre.textContent = "Драма";
                    bg.style.backgroundImage =  "url('img/bg.jpg')";
                };


            // Создадим дефолтную ф-ю для сортировки для того если наша ф-я будет дополняться, например добавится проверка сортируемых
                // эл., возможно подключить доп. ф-ю сортировки как мы делали с числами.
                let sortArr = (arr) =>{
                    arr.sort();
                };
                
            deleteAdv(adv);
            makeChanges();
            createMovieList(movieDB.movies, movieList); // вызываем один раз для построения первоначального списка

        });