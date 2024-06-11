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