"use strict";
{//  403 Tabs

  window.addEventListener("DOMContentLoaded", () => {
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

    // Добавил в css файл такой код .show{display:block}.hide{display:none}
    //.fade{animation-name: fade;animation-duration: 1.5s;}@keyframes fade{from{opacity: 0.1;}to{opacity: 1;}}
  });
}

{//  408 Timer обратного отсчета + 409 фикс прошедшей даты
  ("use strict");
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

    updateClock(); //Запускаем вручную что бы пофиксить второй баг

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

{// 411 Динамическое модально окно
  "use strict";
  /* По нажатии на одну из двух разных кнопок будет выскакивать пока еще скрытое модальное окно 
  <div class="modal">. Кнопки с разными аттрибутами и поэтому мы их объеденим одним дата аттрибутом 
  data-modal, допишем в верстку этот селектор
  <button data-modal class="btn btn_dark">Связаться с нами</button>. 
  Для закрытия окна после вызова(показа) прописываем в закрывающем элементе data-close  
  <div data-close class="modal__close">&times;</div>  - это крестик */

      const modal = document.querySelector(".modal"),
            modalTrigger = document.querySelectorAll("[data-modal]"),
            modalCloseBtn = document.querySelector("[data-close]");
  

  /* modalTrigger.addEventListener("click", ()=>{
      modal.classList.add("show");
      modal.classList.remove("hide");
      document.body.style.overflow = "hidden";
  });
  
  modalCloseBtn.addEventListener("click", ()=>{
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.body.style.overflow = ""; //оставляем пустые скобки и браузер сам возвращает дефолт для прокрутки страницы
  });
  
 
  Или через toggle контролируя свойство display через стиль show
  modalTrigger.addEventListener("click", ()=>{
      modal.classList.toggle("show"); //если класса нет - добавит, если есть уберет
      document.body.style.overflow = "hidden";
  });
  
  modalCloseBtn.addEventListener("click", ()=>{
      modal.classList.toggle("show");
      document.body.style.overflow = ""; 
  }); */
  

  //Создаем функцию для перебора кнопок при querySelectorAll
  modalTrigger.forEach(btn =>{
      btn.addEventListener("click", ()=>{
          modal.classList.add("show");
          modal.classList.remove("hide");
          document.body.style.overflow = "hidden";
      });
  });
  
  /* При тестировании работы ф-ии навешивали на одну кнопку
  modalCloseBtn.addEventListener("click", ()=>{
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.body.style.overflow = ""; 
  }); */
  


  /* реализуем закрытие окна по клику на подложку(темную часть) и по кнопке Esc клавиатуры
  <div class="modal"> - подложка (обертка) (темная)
    <div class="modal__dialog"> - область окна (светлая) - вложена в подложку(обертку)
  єл. подложки в переменной modal
  modal.addEventListener("click", (e)=>{
      if(e.target === modal){    
          modal.classList.add("hide");
          modal.classList.remove("show");
          document.body.style.overflow = ""; 
      }
  }); */

  
  //Правило Don't Repeat yourself (DRY) если код повторяется нужно его вынести в одну функцию
  function closeModal(){
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.body.style.overflow = ""; 
  }
  
  modalCloseBtn.addEventListener("click", closeModal); // тут просто передаем функцию
  
  modal.addEventListener("click", (e)=>{
      if(e.target === modal){    
          closeModal();          
      }
  });
  
  //Реализуем закрытие по кнопке Esc клавиатуры (Коды кнопок  keycode.info или learn.javascript.ru/keyboard-events)
  document.addEventListener("keydown", (e)=>{
      if(e.code === "Escape" && modal.classList.contains("show")){//если код события строго равен Escape(обозначение кнопки Esc)
          closeModal();           // вызываем функцию
      }
  });
  //что бы closeModal(); по Esc срабатывал только когда открыто окно modal.classList.contains("show")
}

{// 412 весь код вместе с предыдущими
  
  const modal = document.querySelector(".modal"),
    modalTrigger = document.querySelectorAll("[data-modal]"), 
    //modalCloseBtn = document.querySelector("[data-close]"), 
    btnCall = document.querySelector(".btn_min");

  //Правило Don't Repeat yourself (DRY) если код повторяется нужно его вынести в одну функцию
  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  // todo удаляем в ??? уроке и создаем для динам. модальных окон другой
  //modalCloseBtn.addEventListener("click", closeModal); // тут просто передаем функцию

  // modal.addEventListener("click", (e)=>{
  //     if(e.target === modal){    // строгое равенство объекта по которому кликнули объекту modal
  //         closeModal();          // тут вызываем функцию
  //     }
  // });


  // todo ??? Усовершенствованное для динамически создаваемых окон
  modal.addEventListener("click", (e) => {
    // Проверяем равенство объекту modal или объект содержащий аттрибут data-close равен пустой строке, мы туда ничего не помещаем
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(); // тут вызываем функцию
    }
  });

  //Реализуем закрытие по кнопке Esc клавиатуры (Коды кнопок  keycode.info или learn.javascript.ru/keyboard-events)
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      //если код события строго равен Escape(обозначение кнопки Esc)
      closeModal(); // вызываем функцию
    }
  });
  //что бы closeModal(); по Esc срабатывал только когда открыто окно modal.classList.contains("show")


  // 412 Модифицируем Модальное окно для показа по таймеру и при долистывании страницы до конца

    // Создаем функцию для открытия окна преобразуя modalTrigger.forEach(btn =>{
      function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        //Дорабатываем openModal чтобы если пользователь сам открыл окно, таймер отменялся
        clearInterval(modalTimerId); //Timeout отменяет тойже командо как и интервал
    }
    
    modalTrigger.forEach(btn =>{
        btn.addEventListener("click", openModal);
    });
    
    const modalTimerId = setTimeout(openModal, 5000);
    
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight - 1){
                openModal();
                window.removeEventListener("scroll", showModalByScroll);
        } 
    }
    
    window.addEventListener("scroll", showModalByScroll);

}

{//  418  карточки динамически при помощи классов.
  class MenuCard{
    constructor(src, alt, title, descr, price, parentSelector){ 
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 28; //пока записываем статический курс валют
        this.changeToUAH(); // вызываем метод для конвертирования перед render
    }

    changeToUAH() { // Метод для конвертирования цены из долларов в гривну 
        this.price = this.price * this.transfer;
    }

    render() { //метод для формирования верстки. 
        const element = document.createElement("div"); //создаем элемент div
        //Вставлем верстку из хтмл в innerHTML созданного div
        element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
        `;
        //Для размещения этой структуры нужно знать родителя, добавляем в принимаемые аргументы parentSelector, 
        //он может быть разный в зависимости от создаваемой карты MenuCard, сразу получаем его элемент
        this.parent.append(element);
    }
}


//Можно использовать вызов объекта на месте, без присвоения его к переменной, 
new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"”',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов...',
    9,
    ".menu .container"
).render();

//заменяем карточки которые были в верстке и удаляем их оттуда
new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное ...',
    9,
    ".menu .container"
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов ...',
    9,
    ".menu .container"
).render();
   
//Структура HTML верстки. Обращаемся к самому верхнему элементу .menu а потом к его div .container
/* <div class="menu">
        <h2 class="title">Наше меню на день</h2>

        <div class="menu__field">
            <div class="container">
                <div class="menu__item"></div> */
}

{//  419 используем rest оператор

  //В методе render мы создаем лишний div, что бы от этого избавится нужно класс "menu__item" присвоить этому div
  //но что бы нам присвоить еще классы этому div которые могут появится в будущем, можно их задать через rest
  class MenuCard{
    constructor(src, alt, title, descr, price, parentSelector, ...classes){
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
        
        /* Задаем параметр класса по умолчанию, в случае если его не будет. Проверку выполняем на 
        количество элементов, так как rest все равно сформирует пустой массив, который в условии
        будет интерпретироваться как true. Также ведут себя qeurySelectorAll, getElementsByClassName
        и т.д. когда мы пытаемся получить эл. со страницы и их не находит, формируется пустой массив */

        if(this.classes.length === 0) {
            this.element = "menu__item";            // присваиваем класс в пустой массив для возможной
            element.classList.add(this.element);    // дальнейшей работы с ним
        } else {
            //перебираем массив каждый класс присваиваем его  через класслист элементу
            this.classes.forEach(className => element.classList.add(className)); 
        }
    
        // Убираем <div class="menu__item">, и присваивам класс его при задании новой карточки  
        // последним аргументом. Записываем без точки потому что присвоение через classList
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
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов...',
    9,
    ".menu .container",
    "menu__item",
    "big"    //! добавили еще класс что бы посмотреть сработает ли rest оператор 
).render();

new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное ...',
    14,
    ".menu .container",
    "menu__item"
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов ...',
    12,
    ".menu .container",
    "menu__item"
).render();

}

{//  504 POST отправка данных на сервер
  
  /* Задача собрать данные из форм Имя и Телефон в двух местах(на сайте и в модальном окне) и отправить
  на сервер при нажатии кнопки

  Для контроля правильной отработки бэкенда создаем в корне проэкта файл server.php и запишем 
  <?php echo var_dump($_POST);
  Эта комманда берет данные которые пришли из клиента ( массив _POST ) превращает в строку и 
  показывает обратно на клиенте(ответ сервера, responce)

  формы две (имя, телефон) поэтому функция отправки будет повторятся, что бы не дублировать два 
  обработчика, обернем в функцию для последующего вызова. Тут еще используем XML hhtp request, в 
  следующих уроках будет более современный метод


  получаем все формы по тегу */

        const forms = document.querySelectorAll('form');


    // Создаем объект для вывода текстовых сообщений пользователю о ходе запроса

        const message = {
            loading: 'Загрузка',
            success: 'Спасибо! До связи',
            failure: 'Что-то пошло не так...'
        };


    // Берем все form и для каждой подвязываем функцию postData

        forms.forEach(item => {
            postData(item);
        });


/* Функция для постинга данных. В параметры пропишем form чтобы удобно было навешивать обр. событий
    на нее. Событие submit срабатывает каждый раз когда пытаемся отправить форму, как нажатием Enter
    так и нажатием по кнопке отправки button с type='submit'. 

    ! В верстке если кнопка задна тегом button(а не div или a ) то у нее автоматически type='submit'
    это класическое поведение кнопки - отправка формы с перезагрузкой страницы, мы же сделаем без
    перезагрузки и напишем свой функционал для этого, отменив стандартное поведение */

    function postData(form) { // принимаем аргумент form для удобства навешивания ему обр. соб. submit
      form.addEventListener('submit', (e) => {  // submit срабатывает по Enter или button с type submit. 
          //если в верстке кнопка задана  тегом <button - у нее автоматически установлен type submit
          e.preventDefault(); // отменяем стандартное повередение - перезагрузку страницы
          
          //Создаем новый блок для вывода пользователю сообщений
          const statusMessage = document.createElement('div');
          statusMessage.classList.add('status'); // добавляем класс status
          statusMessage.textContent = message.loading; // отправка только пошла, сообщение - загрузка
          form.append(statusMessage); // Прикрепляем этот див с сообщением к form для показа на странице

          const req = new XMLHttpRequest(); // создаем объект запроса
          req.open('POST', 'server.php');   // вызываем метод open для настройки запроса

          /* как получить все данные введенные пользователем и отправить на сервер. 
          Можно вручную. взять форму, взять все инпуты которые есть внутри, взять их value, перебрать,
          сформировать объект, но это очень нерационально потому что есть готовые механизмы, и самый 
          простой способ подготовить данные для отправки из формы использовать объект - formData,
          не всегда нужно передавать данные в формате JSON, зависит от поддержки сервера. 
          Рассмотрим formData и второй формат JSON(данные из formData преобразуем  в JSON ) */

          req.setRequestHeader('Content-type', 'application/json');

          const formData = new FormData(form); //! формирует объект ключ-значение из полей 
                                               //! input/option/textarea, но только если у них  
                                               //! прописан тег name, иначе не найдет эти значения.
                                               // (name="name", name="phone")

          /* Если работаем с JSON, FormData специфический объект который просто превратить в JSON не
          получится, есть спец прием для этого
          создаем пустой объект и через перебор FormData через forEach запушим значения */
          const object = {};
          formData.forEach(function(value, key){
              object[key] = value;
          });

          //Теперь используем конвертацию в json и помещаем его в  req.send(json);
          const json = JSON.stringify(object);

          //Если работаем с JSON то 
          req.send(json);


          /* если передаем через XMLHttpRequest
          multipart/form-data - используем чтобы работал FormData
          ! согласно описанию FormData, но есть ньюанс - смотр ниже
          так как мы отправляем данные то есть body - formData

              req.setRequestHeader('Content-type', 'multipart/form-data'); 
              req.send(formData); 

          */

          req.addEventListener('load', () => {
              if (req.status === 200) {
                  console.log(req.response);
                  statusMessage.textContent = message.success;    // Сообщение успешной отправки
                  form.reset();                   // очищаем форму
                  setTimeout(() =>{
                      statusMessage.remove()      // удаляем блок со страницы
                  }, 2000);
              } else {
                  statusMessage.textContent = message.failure;    // Сообщение ошибки
              }
          });
      });
  }

  /*
  ! Чтобы изменения сохраненные в коде применились при работе с локальным сервером, нужно каждый раз
  сбрасывать кеш - shift+f5 . Сервер запоминает старые изменения чтобы их каждый раз не подгружать.


  После заполнения полей и нажатия кнопки отправить, данные ушли - смотрим по вкладке Network, 
  статус сервера - 200 ОК  нам написало 'Спасибо! До связи' но в консоль получили пустой массив, это
  случилось из-за заголовка  multipart/form-data  
  ! Когда используем связку XMLHttpRequest объекта и FormData - заголовок устанавливать не нужно, 
  он устанавливается автоматически, поэтому весь заголовок
      req.setRequestHeader('Content-type', 'multipart/form-data'); 
  нам не нужно прописывать, поэтому закомментируем его и все будет отрабатывать хорошо. 

  Если нужно отправлять данные в JSON тогда прописываем 
  req.setRequestHeader('Content-type', 'application/json');


  ! Ньюанс PHP нативно не умеет работать с данными JSON, чаще всего такие данные отправляют на сервера
  с использованием Node.JS

  Но можно вручную прописать совместимость с PHP в файле допишем строку 

      <?php echo 
      $_POST = json_decode(file_get_contents("php://input), true);
      var_dump($_POST); 
  
  */

}

{//  505 Красивое оповещение пользователя

  // Изменения прошлого кода

  // modalCloseBtn = document.querySelector("[data-close]");  // 505 удалена

  // modalCloseBtn.addEventListener("click", closeModal); // 505 удален

  // 505 модифицировали чтобы ф-я реагировала и на клику по крестику
  // modal.addEventListener("click", (e) => {
  //   if (e.target === modal) {
  //     closeModal();
  //   }
  // });

  modal.addEventListener("click", (e)=>{
    if(e.target === modal || e.target.getAttribute('data-close') == '') {  
        closeModal();          
    }
  });

  const message = {
    // loading: "Загрузка", // 505 добавили путь к спиннеру вместо текста
    loading: 'img/form/spinner.svg',
    success: "Спасибо! До связи",
    failure: "Что-то пошло не так...",
  };

  function postData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      //005 изменяем для показа картинки и класс
      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
      form.insertAdjacentElement('afterend', statusMessage)

      const req = new XMLHttpRequest();
      req.open("POST", "server.php");

      req.setRequestHeader("Content-type", "application/json");
      const formData = new FormData(form);
      const object = {};

      formData.forEach(function (value, key) {
        object[key] = value;
      });

      const json = JSON.stringify(object);

      // req.send(formData);
      req.send(json);

      req.addEventListener("load", () => {
        if (req.status === 200) {
          console.log(req.response);
          showThanksModal(message.success);
          form.reset();
          statusMessage.remove();
        } else {
          showThanksModal(message.failure);
        }
      });
    });
  }

  // Новое в 505
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal(); // открываем обертку модального окна

    const thanksModal = document.createElement('div'); // Создаем елемент для нового модального окна
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>x</div> 
            <div class="modal__title">${message}</div> 
        </div>`;

    document.querySelector('.modal').append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();   // удаляем наш новый блок
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();           // закрываем окно 
    }, 4000);
  }


}


{//  507 Переписываем запросы с помощью fetch

  // 1) отправим классическую формдейту 2) отправим JSON файл на наш сервер

  //Убираем
  function postData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      //005 изменяем для показа картинки и класс
      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      //записываем инлайн стили что бы картинка была по центру
      statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
      //form.append(statusMessage);  - удалена в 005 что бы не сдвигалась форма используем insertAdjacentElement послеформы
      form.insertAdjacentElement("afterend", statusMessage);

      //007 Убираем этот запрос, вместо него будет fetch - который перемещаем ниже под создание formData
      // const req = new XMLHttpRequest();
      // req.open('POST', 'server.php');

      //007 из req.setRequestHeader берем headers только через двоеточие и удаляем строку
      //req.setRequestHeader('Content-type', 'application/json');

      const formData = new FormData(form);

      //007- пока закоментируем потому что  отправляем только FormData и превращать в json не нужно
      // const object = {};
      // formData.forEach(function(value, key){
      //     object[key] = value;
      // });
      // const json = JSON.stringify(object);

      // req.send(formData);  //007 убрано

      //007  Раньше обрабатывали результат запроса так, теперь с помощью промисов
      // req.addEventListener('load', () => {
      //     if (req.status === 200) {
      //         console.log(req.response);
      //         showThanksModal(message.success); // запускаем нашу функцию с аргументом сообщением
      //         form.reset(); //Удалили таймаут потому что она будет использоваться только для спинера
      //         statusMessage.remove(); // удаляется спиннер
      //     }else{
      //         showThanksModal(message.failure);
      //     }
      // });

      fetch("server.php", {
        method: "POST",
        // headers: {                // заголовок раскоментируем когда будем отправлять json данные
        //     'Content-type': 'application/json'
        // },
        body: formData,
      })
        .then((data) => data.text()) //От сервера пришел отве Responce объект, но не данные которые мы отправляли, что бы их получить
        //что бы понимать какой ответ приходит нужно этот ответ модифицировать. В данном случае в текст, потому что мы знаем
        //что отправляи не json. ***Так же в Сервере .php  закоментируем строку для работы с json
        .then((data) => {
          console.log(data);
          showThanksModal(message.success); // запускаем нашу функцию с аргументом сообщением
          statusMessage.remove(); // удаляется спиннер
        })
        .catch(() => {
          showThanksModal(message.failure); // Показываем ошибку если есть
        })
        .finally(() => {
          form.reset(); //очищаем форму в любом случае в конце этого кода
        });
    });
  }
  // Что бы передать JSON изменяем

  //007- пока закоментируем потому что  отправляем только FormData и превращать в json не нужно
  // const object = {};
  // formData.forEach(function(value, key){
  //     object[key] = value;
  // });

  // const json = JSON.stringify(object); // - избавляемся от лишней переменной и подставляем вместо formData

  // fetch('server.php', {
  //     method: 'POST',
  //     headers: {                // заголовок раскоментируем для отправки json данных
  //         'Content-type': 'application/json' //***Так же в Сервере .php  раскомментируем строку для работы с json
  //     },
  //     body: JSON.stringify(object)
  //     //body: formData
  // }).then(data => data.text())
  // .then(data => {
  //     console.log(data);
  //     showThanksModal(message.success); // запускаем нашу функцию с аргументом сообщением
  //     statusMessage.remove(); // удаляется спиннер
  // }).catch(() => {
  //     showThanksModal(message.failure); // Показываем ошибку если есть
  // }).finally(() => {
  //     form.reset(); //очищаем форму в любом случае в конце этого кода
  // });

  /*  Проверим вывод ошибки для пользователя. Допустим ошибку в пути сервера server1.php, при этом
  в консоль выкидывается ошибка но сообщение в модальном окне выводится как при положительном ответе.
  Это особенность fetch, промис который он запускает не перейдет в состояние отклонено(rejected) из-за
  ответа http который считается ошибкой (404, 500, 502, ...) он все равно выполнится нормально у него
  поменятся только status который будет false. 
  
  Еще раз простыми словами - если внутри фетча промис попадает на ошибку которая связана с http 
  протоколом - он не выкинет reject, для него это не считается ошибкой, он нормально отработает resolve.
  Главное для фетча что он вообще смог сделать запрос, соответственно reject будет только в случае сбоя
  сети или если что то помешало запросу выполнится) */

}
