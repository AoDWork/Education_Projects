// 403 + 408 Timer
"use strict";
window.addEventListener("DOMContentLoaded", () => {
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


  // 411 Modal
  const modal = document.querySelector(".modal"),
    modalTrigger = document.querySelectorAll("[data-modal]"),
    modalCloseBtn = document.querySelector("[data-close]");

  // заменили в 412
  //Создаем функцию для перебора кнопок при querySelectorAll
  // modalTrigger.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     modal.classList.add("show");
  //     modal.classList.remove("hide");
  //     document.body.style.overflow = "hidden";
  //   });
  // });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalCloseBtn.addEventListener("click", closeModal);
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  //Реализуем закрытие по кнопке Esc клавиатуры (Коды кнопок  keycode.info или learn.javascript.ru/keyboard-events)
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });


  // 412 Модифицируем Модальное окно для показа по таймеру и при долистывании страницы до конца
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

});
