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

export default timer