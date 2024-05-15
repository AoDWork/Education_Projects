//  403 Tabs

window.addEventListener("DOMContentLoaded", () => {
  //получаем элементы в переменные
  const tabs = document.querySelectorAll(".tabheader__item"), // кнопки для подсветки активной
    tabsContent = document.querySelectorAll(".tabcontent"), // контент таба
    tabsParent = document.querySelector(".tabheader__items"); // родительский

  // 1) Скрываем ненужные табы
  function hideTabContent() {
    tabsContent.forEach((item) => {     //перебираем элементы и назначаем всем стиль
      //item.style.display = "none";    // сначала делали через инлайн стили
      item.classList.add("hide");       // Делаем через классы в css теперь в две строчки
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
    tabsContent[i].classList.add("show", "fade");   // Делаем через классы в css теперь в две строчки
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
