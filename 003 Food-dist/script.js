"use strict";

//По нажатии двух разных кнопок будет выскакивать пока еще скрытое модальное окно <div class="modal">
//Кнопки с разными аттрибутами и поэтому мы их бъеденим одним дата аттрибутом data-modal, допишем в верстку этот селектор
//<button data-modal class="btn btn_dark">Связаться с нами</button> для закрытия этого окна прописываем 
//в закрывающем элементе data-close  <div data-close class="modal__close">&times;</div>  - это крестик
const modal = document.querySelector(".modal"),
      modalTrigger = document.querySelectorAll("[data-modal]"), //квадратные скобки что бы обратится к аттрибуту
      modalCloseBtn = document.querySelector("[data-close]"),
      btnCall = document.querySelector(".btn_min");


//Правило Don't Repeat yourself (DRY) если код повторяется нужно его вынести в одну функцию
function closeModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = ""; 
}

modalCloseBtn.addEventListener("click", closeModal); // тут просто передаем функцию

modal.addEventListener("click", (e)=>{
    if(e.target === modal){    //проверяем строгое равенство объекта по которому кликнули объекту modal
        closeModal();          // тут вызываем функцию
    }
});

//Реализуем закрытие по кнопке Esc клавиатуры (Коды кнопок  keycode.info или learn.javascript.ru/keyboard-events)
document.addEventListener("keydown", (e)=>{
    if(e.code === "Escape" && modal.classList.contains("show")){//если код события строго равен Escape(обозначение кнопки Esc)
        closeModal();           // вызываем функцию
    }
});
//что бы closeModal(); по Esc срабатывал только когда открыто окно modal.classList.contains("show")

//<<<<<<<009 Модальное окно должно появится через определенное время или когда пользователь долистал страницу до конца >>>>>
// const modalTimerId = setTimeout();

//Создаем функцию для открытия окна преобразуя modalTrigger.forEach(btn =>{
function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    //Дорабатываем openModal что бы если пользователь сам открыл окно, таймер отменялся
    clearInterval(modalTimerId); //Timeout отменяет также как и интервал
}

modalTrigger.forEach(btn =>{
    btn.addEventListener("click", openModal);
});

//const modalTimerId = setTimeout(openModal, 5000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
    } 
}

//Делаем что бы окно показывалось при долистывании страницы до конца
// window.addEventListener("scroll", ()=>{
//     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
//         openModal();
//     }   //pageYOffset - проскролленая часть + clientHeight - видимая часть на мониторе будут больше или равны
//         // или больше scrollHeight все области скролла, минус 1 пиксель из-за особенности некоторых браузеров и мониторов
// }//,{once: true});

//что бы не запускалось много раз окно при доскроле до конца страницы можно использовать настройки обработчика событий
//после функции можно добавить {once: true}, но оно в данном случае не сработает потому что обработчик повешен на скролл
//тоесть оно срабатывает при скроле, но условия не выполняются и окно не появляется, а внизу страницы не запускается
//потому что уже как бы сработало 
//ВТОРОЙ способ будем удалять обработчик события с виндовся после 1 разового выполнения removeEventListener для этого
//создаем функцию showModalByScroll и там прописываем ремув, и модифицируем window.addEventListener
window.addEventListener("scroll", showModalByScroll);

//013
// class MenuCard{
//     constructor(src, alt, title, descr, price, parentSelector){ //alt - будет показываться если картинки нету
//         this.src = src;
//         this.alt = alt;
//         this.title = title;
//         this.descr = descr;
//         this.price = price;
//         this.parent = document.querySelector(parentSelector);
//         this.transfer = 28; //пока записываем статически курс валют
//         this.changeToUAH(); // вызываем метод для конвертирования, он выполниться перед методом создания верстки
//     }

//     changeToUAH() { // Метод для конвертирования цены из долларов в гривну когда эта информация будет приходить с сервера
//         this.price = this.price * this.transfer;
//     }

//     render() { //метод для формирования верстки. 
//         const element = document.createElement("div"); //создаем элемент div
//         //Вставлем верстку из хтмл в innerHTML созданного div
//         element.innerHTML = `
//             <div class="menu__item">
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             </div>
//         `;
//         //Для размещения этой структуры нужно знать родителя, добавляем в принимаемые аргументы parentSelector, 
//         //он может быть разный в зависимости от создаваемой карты MenuCard, сразу получаем его элемент
//         this.parent.append(element);
//     }
// }
// //Можно использовать вызов объекта на месте, без присвоения его к переменной, но тогда в будущем не сможем к нему обратиться
// new MenuCard(
//     "img/tabs/vegy.jpg",
//     "vegy",
//     'Меню "Фитнес"”',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     ".menu .container"
// ).render();
// //заменяем карточки которые были в верстке и удаляем их оттуда
// new MenuCard(
//     "img/tabs/elite.jpg",
//     "elite",
//     'меню “Премиум”',
//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     9,
//     ".menu .container"
// ).render();

// new MenuCard(
//     "img/tabs/post.jpg",
//     "post",
//     'Меню "Постное"',
//     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//     9,
//     ".menu .container"
// ).render();


// const testCard = new MenuCard(
//     "img/tabs/elite.jpg",
//     "elite",
//     'меню “Премиум”',
//     'В меню “Премиум” мы ...',
//     100,
//     ".menu .container");
// testCard.render();
//btnCall.addEventListener("click", testCard.render); //- через кнопку почему то не работает

//Структура HTML верстки. Обращаемся к самому верхнему элементу .menu а потом к его div .container
/* <div class="menu">
        <h2 class="title">Наше меню на день</h2>

        <div class="menu__field">
            <div class="container">
                <div class="menu__item"></div> */

//=========  014 используем rest оператор =============
//В методе render мы создаем лишний div, что бы от этого избавится нужно класс "menu__item" присвоить этому div 
//но что бы нам присвоить еще классы этому div которые могут появится в будущем, можно их задать через rest
class MenuCard{
    constructor(src, alt, title, descr, price, parentSelector, ...classes){ //alt - будет показываться если картинки нету
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 28; 
        this.changeToUAH(); 
    }

    changeToUAH() { 
        this.price = this.price * this.transfer;
    }

    render() { //метод для формирования верстки. 
        const element = document.createElement("div"); 
        //Задаем параметр класса по умолчанию, в случае если его не будет.Проверку выполняе на количество элементов, так как rest
        //все равно сформирует пустой массив который в условии будет интерпретироваться как true. Также ведут себя qeurySelectorAll,
        //getElementsByClassName и т.д. когда мы пытаемся получить эл. со страницы и их не находит, формируется пустой массив
        if(this.classes.length === 0) {
            this.element = "menu__item"; //присваиваем класс в пустой массив для возможной дальнейшей работы с ним
            element.classList.add("menu__item");
        } else {
             //перебираем массив и выдергиваем каждое название класса и присваи ваем его как класс сласслисту элемента
            this.classes.forEach(className => element.classList.add(className)); 
        }
       
        //убираем <div class="menu__item">, и присваивам его при задании новой карточки последним аргументом
        //Записываем без точки потому что присвоние через classList
        element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
        `;
        this.parent.append(element);
    }
}

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"”',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container",
).render();
//заменяем карточки которые были в верстке и удаляем их оттуда
new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    ".menu .container",
    "menu__item"
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    12,
    ".menu .container",
    "menu__item"
).render();