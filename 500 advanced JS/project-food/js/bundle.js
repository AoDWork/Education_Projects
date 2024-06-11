/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((module) => {

function calculator() {
    // 517 Calculator + 518 enhanced
    const result = document.querySelector(".calculating__result span");
    let sex, height, weight, age, ratio;

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    } else {
        sex = "female";
        localStorage.setItem("sex", "female");
    }

    if (localStorage.getItem("ratio")) {
        ratio = localStorage.getItem("ratio");
    } else {
        ratio = 1.375;
        localStorage.setItem("ratio", 1.375);
    }

    function initlocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach((el) => {
            el.classList.remove(activeClass);

            if (el.getAttribute("id") === localStorage.getItem("sex")) {
                el.classList.add(activeClass);
            }

            if (
                el.getAttribute("data-ratio") === localStorage.getItem("ratio")
            ) {
                el.classList.add(activeClass);
            }
        });
    }

    initlocalSettings("#gender div", "calculating__choose-item_active");
    initlocalSettings(
        ".calculating__choose_big div",
        "calculating__choose-item_active"
    );

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = "____";
            return;
        }

        if (sex === "female") {
            result.textContent = Math.round(
                (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
            );
        } else {
            result.textContent = Math.round(
                (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
            );
        }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach((el) => {
            el.addEventListener("click", (e) => {
                if (e.target.getAttribute("data-ratio")) {
                    ratio = e.target.getAttribute("data-ratio");
                    localStorage.setItem("ratio", ratio);
                } else {
                    sex = e.target.getAttribute("id");
                    localStorage.setItem("sex", sex);
                }

                elements.forEach((el) => {
                    el.classList.remove(activeClass);
                });

                e.target.classList.add(activeClass);

                calcTotal();
            });
        });
    }

    getStaticInformation("#gender div", "calculating__choose-item_active");
    getStaticInformation(
        ".calculating__choose_big div",
        "calculating__choose-item_active"
    );

    function getDymanicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener("input", (e) => {
            if (input.value.match(/\D/g)) {
                input.style.border = `1px red solid`;
            } else {
                input.style.border = `none`;
            }

            switch (e.target.getAttribute("id")) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    }

    getDymanicInformation("#height");
    getDymanicInformation("#weight");
    getDymanicInformation("#age");
}

module.exports = calculator


/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((module) => {

function cards() {
    //=== 418 + 419 Карточки через класс + использовали rest оператор
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
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

        render() {
            const element = document.createElement("div");

            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach((className) =>
                    element.classList.add(className)
                );
            }

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

    // 510 Строим карточки на основе данных с сервера
    const getResouce = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    axios.get("http://localhost:3000/menu").then((data) =>
        data.data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(
                img,
                altimg,
                title,
                descr,
                price,
                ".menu .container",
                "menu__item"
            ).render();
        })
    );
}

module.exports = cards

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((module) => {

function forms() {
    //=== 504 POST запрос, собираем данные из полей Имя и Телефон в двух местах(на сайте и в модальном окне)
    //=== + 507
    const forms = document.querySelectorAll("form");

    const message = {
        // loading: "Загрузка", // 505 добавили путь к спиннеру вместо текста
        loading: "img/form/spinner.svg",
        success: "Спасибо! До связи",
        failure: "Что-то пошло не так...",
    };

    forms.forEach((item) => {
        bindPostData(item);
    });

    //=== 510 Оптимизируем ф-и
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: data,
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
            form.insertAdjacentElement("afterend", statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData("http://localhost:3000/requests", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    //=== 505
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        prevModalDialog.classList.add("hide");
        openModal(); // открываем обертку модального окна

        const thanksModal = document.createElement("div"); // Создаем елемент для нового модального окна
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>x</div> 
            <div class="modal__title">${message}</div> 
        </div>`;

        document.querySelector(".modal").append(thanksModal);

        setTimeout(() => {
            thanksModal.remove(); // удаляем наш новый блок
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal(); // закрываем окно
        }, 4000);
    }
}

module.exports = forms

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal() {
    //=== 411 Modal
    const modal = document.querySelector(".modal"),
        modalTrigger = document.querySelectorAll("[data-modal]");

    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.getAttribute("data-close") == "") {
            closeModal();
        }
    });

    //Реализуем закрытие по кнопке Esc клавиатуры
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    //=== 412 Модифицируем Модальное окно для показа по таймеру и при долистывании страницы до конца
    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        //Дорабатываем openModal чтобы если пользователь сам открыл окно, таймер отменялся
        clearInterval(modalTimerId); //Timeout отменяет тойже командо как и интервал
    }

    modalTrigger.forEach((btn) => {
        btn.addEventListener("click", openModal);
    });

    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (
            window.scrollY + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1
        ) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
}

module.exports = modal

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider() {
    //=== 513 slider carousel + 514 slider dots + 516 use RegExp
    const slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector(".offer__slider"),
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";

    slidesWrapper.style.overflow = "hidden";

    slides.forEach((slide) => (slide.style.width = width));

    slider.style.position = "relative";

    const indicators = document.createElement("ol"),
        dots = [];

    indicators.classList.add("carousel-indicators");
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.classList.add("dot");
        dot.setAttribute("data-slide-to", i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        document.querySelector(".carousel-indicators").append(dot);
        dots.push(dot);
    }

    function setActiveDot() {
        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = 1;
    }

    function addZeroToCurrentIndex() {
        if (slideIndex < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function shiftSlidesRow() {
        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    function getNumberFromCss(str) {
        return +str.replace(/\D/g, "");
    }

    next.addEventListener("click", () => {
        if (offset == getNumberFromCss(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += getNumberFromCss(width);
        }

        shiftSlidesRow();

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        addZeroToCurrentIndex();
        setActiveDot();
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = getNumberFromCss(width) * (slides.length - 1);
        } else {
            offset -= getNumberFromCss(width);
        }

        shiftSlidesRow();

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        addZeroToCurrentIndex();
        setActiveDot();
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");

            slideIndex = slideTo;
            offset = getNumberFromCss(width) * (slideTo - 1);

            shiftSlidesRow();
            addZeroToCurrentIndex();
            setActiveDot();
        });
    });
}

module.exports = slider

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs() {
    //=== 403 Tabs
    //получаем элементы в переменные
    const tabs = document.querySelectorAll(".tabheader__item"), // кнопки для подсветки активной
        tabsContent = document.querySelectorAll(".tabcontent"), // контент таба
        tabsParent = document.querySelector(".tabheader__items"); // родительский

    // 1) Скрываем ненужные табы
    function hideTabContent() {
        tabsContent.forEach((item) => {
            //перебираем элементы и назначаем всем стиль
            //item.style.display = "none";    // сначала делали через инлайн стили
            item.classList.add("hide"); // Делаем через классы в css теперь в две строчки
            item.classList.remove("show", "fade");
        });
        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active"); //удаляем подсветку активности кнопок
        });
    }

    // 2) Показываем нужный таб
    function showTabContent(i = 0) {
        // i = 0 - если вызвать функцию без аргумента то 0 будет подставлятся по дефолту
        //tabsContent[i].style.display ="block";        // сначала делали через инлайн стили
        tabsContent[i].classList.add("show", "fade"); // Делаем через классы в css теперь в две строчки
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");
    }

    // При загрузке страницы вызываем ф-и первый раз чтобы сработало
    hideTabContent(); //скрываем все табы
    showTabContent(); //показываем 1 таб по дефолту( дефолт прописан при объявлении ф-и)

    // 3) Присваиваем обработчик события для кнопок делегированием от родителя
    tabsParent.addEventListener("click", (event) => {
        const target = event.target; //переменная для уменьшения писанины если нужно часто обращатся к евент

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

module.exports = tabs

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {
    //=== 408 Timer + 409 доработка
    const deadLine = "2025-07-20"; //Строкой задаем время окончания, такие строки получают еще из
    // инпута на сайтах

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date()); //Превращает строку в количество
        // милисекунд для математических расчетов Отнимаем текущую дату и получим число в милисек

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)); //Переводим в дни, милисек делим на 1(1000) сек*60
            // в минуте*60 в часе*24 часов в дне и Math.floor округляет это число до меньшего целого
            hours = Math.floor((t / (1000 * 60 * 60)) % 24); //Переводим в часы, и получаем остаток от
            // деления на 24 часа, что бы не было например 150 часов
            minutes = Math.floor((t / 1000 / 60) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }

        //Для возврата этих локальных переменных из фунции используем ретурн и выводим объектом
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }

    //Функция помощник для подставления 0 если число часов/минут меньше 10
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    //функция Устанавливает время на страницу
    function setClock(selector, endtime) {
        //получаем элементы со страницы
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"), //<span id="days">12</span>
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000); //запускаем функцию каждую секунду

        updateClock(); // Запускаем вручную первый что бы не ждать 1 секунду перед показом таймера

        function updateClock() {
            //функция обновления таймера
            const t = getTimeRemaining(endtime);
            //в переменную получаем объект из функции с расчетами на эту секунду

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            //Останавливаем таймер если время вышло
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(".timer", deadLine); //Запускаем таймер в селектор подставляем класс элемента в ендтайм
    // дату которую задаем или откуда то получаем (панель управления, сервер)
}

module.exports = timer

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/


window.addEventListener("DOMContentLoaded", () => {
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
          modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
          cards = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js"),
          timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js"),
          calculator = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js"),
          forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js"),
          slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js")



    
    //=== tabs
    tabs()

    //=== timer 
    timer()

    //=== modal
    modal()

    //=== cards
    cards()

    //=== forms
    forms()

    //=== slider
    slider()

    //=== calculator
    calculator()

});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map